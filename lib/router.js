Router.configure({
    layoutTemplate: '',
    loadingTemplate: 'loading'
});

Router.map(function () {
    this.route('home', {
        path: '/'
    });

    this.route('quizCategories', {
        path: '/categories/:theCategory?',

        waitOn: function () {
            Meteor.subscribe('categories');
        },

        data: function () {
            // Create document path based on URL parameters, if no URL parameters then return null
            var docPath = Boolean(this.params.theCategory) === true ? this.params.theCategory : null;

            // Create the categories cursor
            var categoriesCursor = Categories.find({path: docPath});

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

    this.route('theQuiz', {
        path: '/quiz?',

        template: 'theQuiz',

        waitOn: function () {
            Meteor.subscribe('theQuiz', this.params.id);
        },

        data: function() {
            return Quizzes.findOne();
        }
    });
});
