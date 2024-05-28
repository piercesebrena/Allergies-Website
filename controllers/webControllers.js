// These are changes that NEED AUTHENTICATION.I am the manager so I can access these,but regular people can't.
// Register login /logout.
// profile
// CRUD OPERATIONS ,UPGRADE LOGIN LOGOUT REGISTER
// TEST ROUTES npx nodemon app.js
// DEPLOY-RENDER
const bcrypt = require("bcrypt");

const User = require("../model/userModel.js");


//  READ A PROFILE.
const profile = async (request, response, next) => {
    response.status(200).json({success:
        {message:"We made it to the profile page."},
        statusCode:200
    })
}
//  CREATE A PROFILE
//   EDIT A PROFILE
//   DELETE A PROFILE
const createProfile = async (req, res) => {
    const { username, email, password, name, about_me, role } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
        username: username,
        email: email,
        bio:bio,
        profile: { username:username, email:email,bio:bio }
    });

    try {
        await newUser.save();
        res.status(200).json({ success: true, message: "A new user profile is created", data: newUser, statusCode: 200 });
    } catch (error) {
        res.status(200).json({ success: false, message: "Something happened while creating a user profile", error: error.message, statusCode: 400 });
    }
};

// READ A PROFILE
const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ success: false, message: 'Uh oh.User not found' });
        }
        res.status(200).json({ success: true, data: user });
    } catch (error) {
        res.status(200).json({ success: false, message: error.message });
    }
};

// UPDATE A PROFILE
const updateProfile = async (req, res) => {
    const { name, about_me, role } = req.body;

    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ success: false, message: 'Uh oh.User not found' });
        }

        user.profile.name = name;
        user.profile.about_me = about_me;
        user.role = role;
        await user.save();

        res.status(200).json({ success: true, message: "User profile updated", data: user });
    } catch (error) {
        res.status(200).json({ success: false, message: error.message });
    }
};

// DELETE A PROFILE
const deleteProfile = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        await user.remove();
        res.status(200).json({ success: true, message: "User profile has been deleted" });
    } catch (error) {
        res.status(200).json({ success: false, message: error.message });
    }
};

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
