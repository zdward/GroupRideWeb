// DIRECTORY: GroupRideWeb/public
// RUN COMMAND: npm start
// You should see message "Server listening on port 3000"
const express    = require('express');
const bodyParser = require('body-parser');
const path       = require('path');
const request    = require('request');
const fs         = require('fs');
const mongoose 	 = require('mongoose');
const cors       = require('cors');
var app = express();
require('dotenv').config();
var router = express.Router();


// viewed pages view at http://localhost:3000
 app.use(express.static(path.join(__dirname + '/../../views/')));


// Configure Mongooose and MongoDBAtlas connection
const uri = `mongodb+srv://${ process.env.DBUSER }:${ process.env.DBPASSWORD }@cluster0-xu8sb.mongodb.net/test?retryWrites=true`;


//Connection with mongoDB 
mongoose.connect(uri,
  {useNewUrlParser: true,
   useFindAndModify : false,
   useCreateIndex : true,
   dbName: 'groupRide'});
const db = mongoose.connection;

// Configure the app
app.set('secret', process.env.SECRET); // secret variable

//Used for catching error messages 
process.on('uncaughtException', function (err) {
  // This should not happen
  console.log("Something unexpected happened. This should be handled more gracefully. The culprit is: ", err);
});

// We might need to use CORS. If so run: npm install cors
// const cors = require("cors");




// If using cors
// app.use(cors());

const port = 3000;




app.listen(port, () => {
  console.log("Server listening on port 3000");
});
