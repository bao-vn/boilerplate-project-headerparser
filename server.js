// server.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/whoami", (req, res) => {
  const ip = "";

  console.log(req.headers['x-forwarded-for']);
  console.log(req.socket.remoteAddress);
  console.log(req.headers);
  const result = {
    // "ipaddress": req.headers['x-forwarded-for'] | req.socket.remoteAddress | null,
    "ipaddress": req.socket.remoteAddress,
    "language": req.headers['accept-language'],
    "software": req.headers['user-agent']
  };

  res.send(result);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
