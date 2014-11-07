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

        var that = this;

        var quizLocalStorageArray = JSON.parse(localStorage.getItem('QuizzesLocal'));

        //create localStorage if doesn't exist
        if(!quizLocalStorageArray) {
            quizLocalStorageArray = [];
        }

        //check if the particular quiz was already stored
        var quizLocalStorage = _.findWhere(quizLocalStorageArray, {'_id': that.params._id});
        if(quizLocalStorage) {
            return quizLocalStorage;
        } else {
            // if not stored, get it from the collection
            var theQuiz = Quizzes.findOne();
            if (theQuiz) {
                //go through each question
                _.each(theQuiz.questions, function(question, questionIndex) {
                    var questionIndex = questionIndex;
                    //remap/add id and index to the choices which are then needed for radio/label id pairs
                    question.choices = _.map(question.choices, function(choice, index) {
                        return {
                            _id: that.params._id + '-' + questionIndex + '-' + index,
                            choice: choice,
                            index: index
                        }
                    });
                    question.choices = _.shuffle(question.choices);
                });
                quizLocalStorageArray.push(theQuiz);
                localStorage.setItem('QuizzesLocal', JSON.stringify(quizLocalStorageArray));
            }
            return theQuiz;
        }

    },

    data: function() {
        return this.quiz();
    }
});

DisplayQuizQuestionController = DisplayQuizController.extend({
    question: function() {
        var quizObj = this.quiz();

        if (quizObj) {
            return (quizObj.questions[this.params.questionIndex]);
        }
    },

    hasNextQuestion: function() {
        var questionIndex = this.params.questionIndex;
        return (Boolean(this.quiz().questions[++questionIndex]));
    },

    data: function() {
        if (this.question()) {
            return {
                _id: this.params._id,
                questionIndex: this.params.questionIndex,
                name: this.quiz().name,
                question: this.question(),
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
