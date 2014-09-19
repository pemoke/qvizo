Router.configure({
    layoutTemplate: ''
});

Router.map(function() {
    this.route('quizCategories', {
        path: '/*',
        waitOn: function() {
            Meteor.subscribe('categories');
        },
        data: function() {
            // Create db filter based on URL parameters
            var filter = Boolean(this.params[0]) === true ? this.params[0] : null;
            var collectionQuery = Categories.find({parent: filter});
            return collectionQuery;
        }
    });
});
