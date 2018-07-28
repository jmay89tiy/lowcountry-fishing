const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Pass to next layer of middleware
  next();
});

app.get('/', (request, response) => response.send('Hello World!'));

app.get('/trip', (request, response) => {
  response.json({"foo": 500});
});

app.post('/trip', (request, response) => {
  if (request.body.trip === "Josh") {
    response.json({"scheduledSuccessfully": true});
  } else {
    response.json({"scheduledSuccessfully": false});
  }
});


app.listen(3000, () => console.log('Example app listening on port 3000!'));
