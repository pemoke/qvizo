Meteor.publish('quizzes', function(state, questionCursor) {
    return Quizzes.find({}, {limit: 1, skip: questionCursor});
});
