const express = require("express");
const app = express();
const bodyParser = require("body-parser");
//const methodOverride = require("method-override");

app.use('/static', express.static('src/app/public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());;
/*app.use(methodOverride(function (request, response) {
    if (request.body && typeof request.body === 'object' && '_method' in request.body) {
      var method = request.body._method;
      delete request.body._method;
      return method;
    }
}));*/

const routes = require("../app/routes/route");
routes(app);

module.exports = app;