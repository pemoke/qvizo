Session.setDefault('questionCursor', 0);

Meteor.autorun(function() {
    Meteor.subscribe('quizzes', Session.get('questionCursor'));
});