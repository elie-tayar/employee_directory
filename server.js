var express = require('express'),
  app = express();
  port = process.env.PORT || 3000;
  mongoose = require('mongoose');
  Task = require('./api/models/employeeModel'); //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/employeedb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/employeeRoutes'); //importing route
routes(app); //register the route

//middlewares The snippet above helps to redirect and respond whenever a wrong route is entered on the site.
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});


app.listen(port);


console.log('employee list RESTful API server started on: ' + port);