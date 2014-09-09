Router.configure({
    layoutTemplate: ''
});

Router.map(function() {
    this.route('', {path: '/'});

    this.route('quizCategories', {
        path: '/cat/:_id'
    });
});
