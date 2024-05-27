// about,allersense,contact,home,hub NO AUTHENTICATION!!
//Create a contact
const Data = require('../data/data.js');
const Allergy =  require('../model/allergyModel.js');



const about = async (request, response, next) => {
    response.status(200).json({success:
        {message:"We made it to the about page."},
        statusCode:200
    })
} 

const allersense = async (request, response, next) => {
    response.status(200).json({success:
        {message:"We made it to the allersense page."},
        statusCode:200
    })
}
const contact = async (request, response, next) => {
    response.status(200).json({success:
        {message:"We made it to the contact page."},
        statusCode:200
    })
}


const home = async (request, response, next) => {
    response.status(200).json({success:
        {message:"We made it to the home page."},
        statusCode:200
    })
}



module.exports = {about,allersense,contact,home}

