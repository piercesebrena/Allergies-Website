// about,allersense,contact,home,hub
const about = async (request, response, next) => 
{response.json("We made it to the about page.");
}
module.exports = {about}