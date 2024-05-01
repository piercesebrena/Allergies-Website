const express = require("express");
// const passport = require("passport");

const router = express.Router();

 const {profile, register, login, logout } = require("../controllers/webController");

//  router.post("/register", register);
 
 router.get("/register",register);

 router.get("/login",login);

//  router.post("/login", login);

 router.get("/login/error", (request, response, next) => {
     response.json("Login error");
 });

router.get("/logout", logout);

router.get("/profile", profile);
    






module.exports = router;

