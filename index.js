const express = require("express");
const cors = require("cors");
const { mongoose } = require("mongoose");
const cookieParser = require("cookie-parser");

const dotenv = require("dotenv").config();

const app = express();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("connected"))
  .catch(() => console.log("not connected"));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["http://localhost:3000", "https://localhost:3000", "*"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);

app.use("/", require("./routes/authRoutes"));

const PORT = process.env.PORT || "4000";

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});
