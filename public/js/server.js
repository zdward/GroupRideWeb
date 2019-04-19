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
// Seems like Alex needs to fill this out
mongoose
  .connect(
    `mongodb+srv://alex:<password>@cluster0-xu8sb.mongodb.net/test?retryWrites=true`,
    { useNewUrlParser: true, userCreateIndex: true }
  )
  .then(() => {
    console.log("successfully connected MongoDB");
  })
  .catch(err => console.log(err));

app.listen(port, () => {
  console.log("Server listening on port 4000");
});
