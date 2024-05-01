// These are changes that NEED AUTHENTICATION.I am the manager so I can access these,but regular people can't.
// Register login /logout.
// profile


const profile = async (request, response, next) => {
    response.json(200).json({success:
        {message:"We made it to the profile page."},
        statusCode:200
    })
}

const login = async (request, response, next) => {
    response.json(200).json({success:
        {message:"This is the login page."},
        statusCode:200

    })
}

const logout = async (request, response, next) => {
    response.json(200).json({success:
        {message:"This is the logout page."},
    })
}

const register = async (request, response, next) => {
    response.json(200).json({success:
        {message:"This is the page to register."},
    })
} 

module.exports = {profile,login,logout,register}
