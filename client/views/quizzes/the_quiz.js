Template.theQuiz.helpers({
    quizName: function () {
        return this.name;
    },

    quizQuestionAndChoices: function () {

        //Check if the data is ready
        if (this.questions) {
            var currentQuestion = Session.get('currentQuestion') === undefined ?
                Session.set('currentQuestion', 0) : Session.get('currentQuestion');
            return (this.questions[currentQuestion]);
        }
        // TODO the Session needs to be reset if a different quiz is started

    }
});

Template.theQuiz.events({
    'click #nextQuestion': function(theEvent, theTemplate) {
        var currentQuestion = Session.get('currentQuestion');
        if (this.questions[++currentQuestion]) Session.set('currentQuestion', currentQuestion);
    },

    'click #prevQuestion': function(theEvent, theTemplate) {
        var currentQuestion = Session.get('currentQuestion');
        if (currentQuestion != 0) Session.set('currentQuestion', --currentQuestion);
    }
});

