Meteor.publish('categories', function() {
    var dbQuery = Categories.find();
    return dbQuery;
});

Meteor.publish('quizzes', function(docPath) {
    var docPathRegExp = docPath !== null ? new RegExp(',' + docPath + ',$') : null;
    var quizzesCursor = Quizzes.find({path: docPathRegExp});
    return quizzesCursor;
});

