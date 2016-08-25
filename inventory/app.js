/*eslint-env node*/

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

var express = require('express'), router = express.Router(),
	http = require('http'), path = require('path'),
	fs = require('fs'), bodyParser = require('body-parser');;
var request = require('request');
var app = express();

// all environments
app.set('port', process.env.PORT || 3001);
app.set('json spaces', 2);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);
app.use(express.static(path.join(__dirname, 'public')));


	if (process.env.VCAP_SERVICES) {
		  // Running on Bluemix. Parse for  the port and host that we've been assigned.
		  var env = JSON.parse(process.env.VCAP_SERVICES);
		  var host = process.env.VCAP_APP_HOST;
		  var port = process.env.VCAP_APP_PORT;

		  console.log('VCAP_SERVICES: %s', process.env.VCAP_SERVICES);

	 }

// setup cloudant CRUD services
// replace the file name with created Service name
var restServices = require('./routes/itemservices.js');
restServices(app, request);

http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});
