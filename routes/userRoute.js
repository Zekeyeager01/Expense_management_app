const express = require("express");
const {
  loginController,
  registerController,
} = require("../controllers/userController");

//router object
const router = express.Router();

//routing
//REGISTER \\ METHOD POST
router.post("/register", registerController);

//LOGIN \\ POST
router.post("/login", loginController);

//test routes

module.exports = router;
