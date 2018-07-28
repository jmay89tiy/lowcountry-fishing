const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/', (request, response) => response.send('Hello World!'));

app.get('/example', (request, response) => {
  response.json({"foo": 500});
});

app.post('/example', (request, response) => {
  if (request.body.guide === "Josh") {
    response.json({"scheduledSuccessfully": true});
  } else {
    response.json({"scheduledSuccessfully": false});
  }
});


app.listen(3000, () => console.log('Example app listening on port 3000!'));
