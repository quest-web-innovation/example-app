var models = require('./schemas');


module.exports.createIdea = function(submitterName, submitterEmail, submittedIdea) {
  
  models.Idea.create({
    name: submitterName,
    email: submitterEmail,
    idea: submittedIdea
  });

}


module.exports.deleteIdea = function(ideaID) {
  
  models.Idea.findOneAndRemove({ _id: ideaID }, function(err) {

    if (err) throw err;

    console.log('Idea successfully deleted!');
  
  });

}