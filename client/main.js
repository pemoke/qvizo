Session.setDefault('questionCursor', 0);

Meteor.subscribe('quizzes', Session.get('questionCursor'));