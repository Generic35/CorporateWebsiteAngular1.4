var express = require('express');
var path = require('path');
var app = express();
var rootPath = path.normalize(__dirname + '/../');
var clientComments = require('./clientCommentsController');
var ourServices = require('./ourServicesController');
var recentWorks = require('./recentWorksController');
var locations = require('./locationsController');
var teamMemberProfiles = require('./teamMemberProfilesController');

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(rootPath + '/app'));

app.get('/data/clientComments', clientComments.get);
app.get('/data/services', ourServices.get);
app.get('/data/recentWorks', recentWorks.get);
app.get('/data/locations', locations.get);
app.get('/data/teamMemberProfiles', teamMemberProfiles.get);
app.get('*', function(req, res){ res.sendFile(rootPath + '/app/index.html'); })

app.listen(8094);
console.log('Listening on port 8094...');