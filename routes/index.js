var express = require('express');
var router = express.Router();
var models = require("../config/schemas");
var db = require("../config/DB");

router.get('/', function(req, res) {
  models.Idea.find(function(err, ideas) {
    if (err) {
      console.log(err)
    }
    res.render('index', {
      index: 'active', // Add 'active' class to nav
      title: "An Example App",
      ideas: ideas
    });
  })

});

router.post('/', function(req, res) {
  console.log("Creating idea " + req.body);
  db.createIdea(req.body.name, req.body.email, req.body.idea);
  res.redirect('/');
});

router.post('/delete', function(req, res) {
  console.log("Delete " + req.body.ideaID);
  db.deleteIdea(req.body.ideaID);
  res.redirect('/');
})

module.exports = router;