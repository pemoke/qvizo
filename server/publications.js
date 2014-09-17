Meteor.publish('categories', function (params) {
    var dbQuery = Categories.find();
    return dbQuery;
});

