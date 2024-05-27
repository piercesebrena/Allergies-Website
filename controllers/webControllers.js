// These are changes that NEED AUTHENTICATION.I am the manager so I can access these,but regular people can't.
// Register login /logout.
// profile
//CRUD 
const bcrypt = require("bcrypt");

const User = require("../model/userModel.js");


// READ A PROFILE.
const profile = async (request, response, next) => {
    response.status(200).json({success:
        {message:"We made it to the profile page."},
        statusCode:200
    })
}
// CREATE A PROFILE
// EDIT A PROFILE
// DELETE A PROFILE
const login = async (request, response, next) => {
    response.status(200).json({success:
        {message:"This is the login page."},
        statusCode:200

    })
}

const logout = async (request, response, next) => {
    response.status(200).json({success:
        {message:"This is the logout page."},
        statusCode:200
    })
}

const register = async (request, response, next) => {
    response.status(200).json({success:
        {message:"This is the page to register."},
        statusCode:200
    })
} 

module.exports = {profile,register,login,logout}
