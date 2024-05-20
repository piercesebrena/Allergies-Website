const express = require("express");
const passport = require("passport");

const router = express.Router();

 const {profile, register, login, logout } = require("../controllers/webControllers");
// All paths will start with /admin as a string."/admin/..."
//  router.post("/register", register);
 
 router.get("/register",register);

 router.get("/login",login);

//  router.post("/login", login);

 router.get("/login/error", (request, response, next) => {
     response.json("Login error");
 });

router.get("/logout", logout);

router.get("/profile", profile);

const checkAuthentication = (request, response, next) => {
    if (request.isAuthenticated()) {
        return next();
    } else {
        response.redirect(403, "/unautheticated")
    }
    }


router.post('/login/local', passport.authenticate('local', {
    failureRedirect: '/login/local/failed'
}), (req, res) => {
    res.status(200).json({
        status: "success",
        statusCode: 200,
        message: "User logged in",
        data: {
            username: req.user.username,
            firstName: req.user.firstName,
            lastName: req.user.lastName
        }
    });
});

router.get('/login/local/failed', loginLocalFailed);

router.get('/logout', logoutRequest);

router.post('/signup', signupRequest);

// GitHub Strategy
router.get('/login/github', passport.authenticate('github'));

router.get('/login/github/failed', (req, res) => {
    res.status(401).json({
        status: "error",
        statusCode: 401,
        message: "There is a problem with Github Authentication"
    });
});

router.get('/auth/github', passport.authenticate('github', {
    successRedirect: '/',
    failureRedirect: '/login/github/failed'
}));

// Google Strategy
router.get('/login/google', passport.authenticate('google', { scope: ['profile'] }));

router.get('/login/google/failed', (req, res) => {
    res.status(401).json({
        status: "error",
        statusCode: 401,
        message: "There is a problem with Google Authentication"
    });
});

router.get('/auth/google', passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/login/local/failed'
}));

module.exports = router;

