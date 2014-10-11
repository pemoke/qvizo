Template.theQuiz.helpers({
    quizName: function () {
        return this.name;
    },

    quizQuestionAndChoices: function () {

        //Check if the data is ready
        if (this.questions) {
            var currentQuestion = Session.get('currentQuestion') === undefined ?
                Session.set('currentQuestion', 0) : Session.get('currentQuestion');
            //var x = this.questions[0];
            //return x.choices.map(function(currentVal, index) {
            //    x.index = index;
            //    return x;
            //});
            ////console.log(x.index);
            //return (this.questions[currentQuestion]);

            // setup question and choices object
            var qc = this.questions[currentQuestion];

            // store the  _id of current quiz
            qc.quizId = this._id === undefined ? null : this._id ;

            // store array index of current question
            qc.questionIndex = currentQuestion;

            // store the question
            qc.question = this.questions[currentQuestion].question;

            // get the choices array
            var choices = this.questions[currentQuestion].choices;

            //remap the choices array to store array's index
            qc.choicesWithIndex = choices.map(function(value, index) {
                return {value: value, choiceIndex: index, quizId: qc.quizId, questionIndex: qc.questionIndex};
            });

            return qc;

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

