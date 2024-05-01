// DO NOT TOUCH UNTIL YOU DO AUTHENTICATION!!!!
require("dotenv").config(); //add from MongoDB doc
require("./config/connection"); //add from MongoDB doc
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const PORT = 3000;
const cors = require("cors");

app.use(morgan("dev"));


 const webRoutes = require('./routes/adminRouter'); // For admin routes
 const allRoutes = require('./routes/siteRouter'); //Define the routing variable for siteRoutes

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname + "/public")));

app.get("/", (request, response, next) => {
  response.status(200).json({success: {message: "This route points to the Home page"}, statusCode: 200});
});



app.use(webRoutes); 
app.use(allRoutes); //Tell the app to use the routing variables you defined earlier, siteRoutes 

app.listen(PORT, () => {
  console.log(`Personal project server is listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}/`)
});
// 