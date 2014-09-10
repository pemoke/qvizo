Router.configure({
    layoutTemplate: ''
});

Router.map(function() {
    this.route('quizCategories', {
        path: '/*',
        waitOn: function() {
            Meteor.subscribe('quizzes', this.params);
        },
        data: function() {
            var collectionQuery = Quizzes.find();
            return collectionQuery;
        }
    });
});
