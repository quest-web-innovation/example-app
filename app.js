//------------------------------------------------------------------------------
// Example App
//------------------------------------------------------------------------------
var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// create a new express server
var app = express();

var port = 3000;

app.set('view engine', 'ejs'); // set ejs as the rendering engine

// Serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to db
mongoose.connect('mongodb://peter:enviropower@ds039115.mlab.com:39115/ideas', function(err, db) {
  if (!err) {
    console.log("Database connected");
  }
})


/****************** routes ********************************/
var index = require('./routes/index');
var about = require('./routes/about')
var members = require('./routes/members'); 
var contact = require('./routes/contact');

app.use('/', index);
app.use('/about', about);
app.use('/members', members);
app.use('/contact', contact);

// start server
app.listen(port, function() {
  console.log("server starting on localhost:" + port);
});
