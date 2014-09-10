Meteor.publish('quizzes', function (params) {
    var dbFilter = typeof(params) === 'object' ? params.toString() : null;
    if (dbFilter) {
        var regExPattern = /(\/)/g;
        dbFilter = new RegExp(',' + dbFilter.toString().replace(regExPattern, ',') + ',');
        console.log('dbFilter ' + dbFilter);
    }
    var dbQuery = Quizzes.find({path: dbFilter});
    console.log(dbQuery.fetch());
    return dbQuery;
});
