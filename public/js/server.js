// DIRECTORY: GroupRideWeb/public
// RUN COMMAND: npm start
// You should see message "Server listening on port 4000"

const express = require("express");

// We might need to use CORS. If so run: npm install cors
// const cors = require("cors");

app = express();

// If using cors
// app.use(cors());

const port = 4000;

// ADD DATABASE CONNECTION

app.listen(port, () => {
  console.log("Server listening on port 4000");
});
