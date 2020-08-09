
require('dotenv').config();

const express = require("express");
var cors = require('cors')
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 4000;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


//! Add routes for API 
//method use is for use another logic || works for generated the Router

// //Cart routes
// app.use(require("./routes/api/carts"))
//Farmers routes
app.use(require("./routes/api/farmers"));
// Orders routes
// app.use(require("./routes/api/orders"))
//Products routes
app.use(require("./routes/api/products")); 

//Users routes
// app.use(require("./routes/api/users"));



// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Connect to the Mongo DB 
//const URI =  process.env.MONGODB_URI ?  process.env.MONGODB_URI : 'mongodb://localhost/Emarket'
const URI =  process.env.MONGOLAB_NAVY_URI ? process.env.MONGOLAB_NAVY_URI : 'mongodb://localhost/Emarket'
mongoose.connect(URI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
}).then(() => {
  console.log("conected to mongodb");
}).catch(error => {
  console.log("mongo error", error);
})


// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
