Router.configure({
    layoutTemplate: '',
    loadingTemplate: 'loading'
});

QuizCategoriesController = RouteController.extend({
    waitOn: function () {
        Meteor.subscribe('categories');
    },

    data: function () {
        // Create document path based on URL parameters, if no URL parameters then return null
        var docPath = Boolean(this.params.query.theCategory) === true ? this.params.query.theCategory : null;

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

DisplayQuizController = RouteController.extend({
    template: 'theQuiz',

    waitOn: function () {
        Meteor.subscribe('theQuiz', this.params._id);
    },

    quiz: function() {
        return Quizzes.findOne();
    },

    data: function() {
        return this.quiz();
    }
});

DisplayQuizQuestionController = DisplayQuizController.extend({
    question: function() {
        var quizObj = this.quiz();
        if (quizObj) return (quizObj.questions[this.params.questionIndex]);
    },

    hasNextQuestion: function() {
        var questionIndex = this.params.questionIndex;
        return (Boolean(this.quiz().questions[++questionIndex]));
    },

    choicesWithIndex: function() {
        var that = this;
        // Map choices array into an object with _id and indexes
        var choices = (_.map(this.question().choices, function(value, index){
            var questionId = that.params._id + '-' + that.params.questionIndex;
            var choiceId = questionId + '-' + index;

            // See if the choice was made before
            var madeChoice = JSON.parse(localStorage.getItem('Answers')) != null ?
                JSON.parse(localStorage.getItem('Answers')) : null ;
            if (madeChoice && madeChoice[that.params._id] && madeChoice[that.params._id][that.params.questionIndex]) {
                var wasAnswered =
                    madeChoice[that.params._id][that.params.questionIndex]
                    == index ? 'checked' : '';
            }
            return {
                _id: choiceId,
                index: index,
                value: value,
                checked: wasAnswered
            };
        }));
        // TODO shuffling console.log(_.shuffle(choices));
        return choices;
    },

    data: function() {
        if (this.question()) {
            return {
                _id: this.params._id,
                questionIndex: this.params.questionIndex,
                name: this.quiz().name,
                question: this.question().question,
                choicesWithIndex: this.choicesWithIndex(),
                hasNextQuestion: this.hasNextQuestion()
            };
        }
    }
});

Router.map(function () {
    this.route('home', {
        path: '/'
    });

    this.route('quizCategories', {
        path: '/categories/:theCategory?',
        controller: QuizCategoriesController
    });

    this.route('theQuiz', {
        path: '/quiz/:_id',
        controller: DisplayQuizController
    });

    this.route('theQuizQuestion', {
        path: '/quiz/:_id/:questionIndex',
        controller: DisplayQuizQuestionController
    });

    this.route('theQuizResult', {
        path: '/quizResult/:_id',
        template: 'quizResult'
    });
});
