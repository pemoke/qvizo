Template.theQuiz.helpers({
    quizName: function () {
        return this.name;
    },

    quizQuestionAndChoices: function () {
        return this;
    }
});

Template.theQuiz.events({
    'click #startQuiz': function(theEvent, theTemplate) {
        Router.go('theQuizQuestion', {_id: theTemplate.data._id, questionIndex: 0});
    },

    'click #nextQuestion': function(theEvent, theTemplate) {
        if (theTemplate.data.hasNextQuestion) {
            Router.go('theQuizQuestion', {_id: theTemplate.data._id, questionIndex: ++theTemplate.data.questionIndex});
        } else {
            Router.go('theQuizResult', {_id: theTemplate.data._id});
        }
    },

    'click #prevQuestion': function(theEvent, theTemplate) {
        if (theTemplate.data.questionIndex > 0) {
            Router.go('theQuizQuestion', {_id: theTemplate.data._id, questionIndex: --theTemplate.data.questionIndex});
        }
    },

    'click input[type="radio"]': function(theEvent, theTemplate) {
        // Store the selected choice, which id has format like "635dpDhd2FLQjDxWC-0-1", in localStorage
        var id = theEvent.currentTarget.id;
        id = id.split('-');

        var quizId = id[0];
        var questionKey = id[1];
        var choiceMade = id[2];

        var answersObj = localStorage.getItem('Answers') == null ? {} : JSON.parse(localStorage.getItem('Answers'));
        answersObj[quizId] = answersObj[quizId] == undefined ? {} : answersObj[quizId];
        answersObj[quizId][questionKey] = choiceMade;

        localStorage.setItem('Answers', JSON.stringify(answersObj) );

    }
});
