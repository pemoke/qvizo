Meteor.publish('categories', function() {
    return Categories.find();
});

Meteor.publish('quizzes', function(docPath) {
    return Quizzes.find({path: docPath});
});

Meteor.publish('theQuiz', function(theQuizId) {
    return Quizzes.find({_id: theQuizId});
});