// All routes are everything that people can see WITHOUT authentication.
const express = require("express");


const router = express.Router();

const {about, allersense, contact, home} = require("../controllers/allController");


// Simple test
router.get("/about", about);

 router.get("/allersense", allersense);

 router.get("/contact", contact);

 router.get("/home", home);
 






// Final version 
// router.get("", (request, response, next) => {
//     response.status().json("");
// });

//  router.get("/", handlerFunctions); 
//  Copy this code,when you have controllers set up.

module.exports = router;