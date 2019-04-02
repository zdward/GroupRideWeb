var express = require('express');
var path = require('path');


res.sendFile(path.resolve('../../views/index.html'));
var app = express();
app.use(express.static(__dirname));
console.log("dirname:", __dirname);
app.get('/', function(req, res) {
  res.sendFile(__dirname + '../../views/index.html');
});

app.listen(4000, function() {
  console.log('Example app listening on port 4000!');
});
