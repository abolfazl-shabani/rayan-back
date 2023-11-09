const express = require("express");
const cors = require("cors");
const router = express.Router();
const {
  test,
  registerUser,
  loginUser,
  getProfile,
} = require("../controllers/authController");

router.get("/", test);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", getProfile);

module.exports = router;
