// All routes are everything that people can see WITHOUT authentication.
const express = require("express");


const router = express.Router();

const {about} = require("../controllers/allController");


// Simple test
router.get("/about", about);
// router.get("", (request, response, next) => {
//     response.json("");
// });
// router.get("", (request, response, next) => {
//     response.json("");
// });
// router.get("", (request, response, next) => {
//     response.json("");
// });
// router.get("", (request, response, next) => {
//     response.json("");
// });
// router.get("", (request, response, next) => {
//      response.json("");
// });


// Final version 
// router.get("", (request, response, next) => {
//     response.status().json("");
// });

//  router.get("/", handlerFunctions); 
//  Copy this code,when you have controllers set up.

module.exports = router;