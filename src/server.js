let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let config = require("./config");
let axios = require("axios");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type, X-Auth-Token');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", false);

  // Pass to next layer of middleware
  next();
});

app.get("/api/autocomplete/", function(req, res) {
  let query = req.query.query;
  axios
    .request({
      url: "https://maps.googleapis.com/maps/api/place/autocomplete/json",
      method: "GET",
      params: {
        key: config.mapsAPI_KEY,
        input: query
      }
    })
    .then(function(response) {
      res.status(200).json(response.data.predictions);
    })
    .catch(function(err) {
      res.sendStatus(400);
    });
});

// Start listening on specific port
app.listen(config.port, function() {
  console.log(`Listening on ${config.port}`);
});
