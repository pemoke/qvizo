Router.configure({
    layoutTemplate: '',
    loadingTemplate: 'loading'
});

QuizListController = RouteController.extend({
    template      : 'quizList',
    onBeforeAction: function () {
        console.log('onBeforeAction');
    }
});

Router.map(function () {
    this.route('quizCategories', {
        path      : '/*',
        //controller: QuizListController,

        waitOn: function () {
            Meteor.subscribe('categories');
        },
        data  : function () {
            // Create document path based on URL parameters, if no URL parameters then return null
            var docPath = Boolean(this.params[0]) === true ? this.params[0].replace(/\//g, ',') : null;

            // Create RegExp from docPath, but if the docPath is null return null which refers to root categories
            var docPathRegExp = docPath !== null ? new RegExp(',' + docPath + ',$') : null;

            // Create the categories cursor
            var categoriesCursor = Categories.find({path: docPathRegExp});

            // If no sub-categories, we are on the last one, so go get its quizzes
            if (categoriesCursor.count() === 0) {
                Meteor.subscribe('quizzes', docPath);
                this.render('quizList');
            } else {
                this.render('quizCategories');
            }

            return categoriesCursor;
        }
    });
});

