Router.configure({
    layoutTemplate: ''
});

Router.map(function() {
    this.route('quizCategories', {
        path: '/*',
        waitOn: function() {
            Meteor.subscribe('categories', this.params);
        },
        data: function() {
            var collectionQuery = Categories.findOne({_id: 'Qvizo'});
            return collectionQuery;
        }
    });
});
