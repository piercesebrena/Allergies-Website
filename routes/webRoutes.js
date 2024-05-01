const express = require("express");
// const passport = require("passport");

const router = express.Router();

// const { register, login, logout } = require("../controllers/webController");

// router.post("/register", register);

// router.post("/login", login);

// router.get("/login/error", (request, response, next) => {
    // response.json("Login error");
// });

// router.get("/logout", logout);

router.get("/profile", (request, response, next) => {
    response.json("We are on the profile page.");
});

module.exports = router;

