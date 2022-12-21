const express = require('express');
const helmet = require('helmet');
const app = express();














































app.use(helmet());
module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  console.log(__dirname);
  response.sendFile(__dirname + '/views/index.html');
});
app.get("\CNIG", (request, response) => {
  console.log('CNIG endpoint.');
  response.send('Bienvenidos al despliegue atomático con Jenkins.')
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
