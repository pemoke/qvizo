Template.theQuiz.helpers({
    quizName: function () {
        return this.name;
    },

    quizQuestionAndChoices: function () {
        //Check if the data is ready
        if (this.questions) {
            var currentQuestion = Session.get('currentQuestion') === undefined ?
                Session.set('currentQuestion', 0) : Session.get('currentQuestion');

            // define question and choices object
            var qc = this.questions[currentQuestion];

            if (qc) {
                // store the _id of current quiz
                qc.quizId = this._id;

                // store array index of current question
                qc.questionIndex = currentQuestion.toString();

                // store the question
                qc.question = this.questions[currentQuestion].question;

                // get the choices array
                var choices = this.questions[currentQuestion].choices;

                //remap the choices array to store array's index
                qc.choicesWithIndex = choices.map(function(value, index) {
                    // check in local miniMongo if the choice has been made before
                    var answers = Answers.findOne({_id: qc.quizId});

                    if (answers) {
                        var wasChecked = '';
                        //var wasChecked = answers.QA.each(function(element, index, array) {
                        //    console.log(element);
                        //});
                        //TODO
                        console.log(answers.toString());

                        //wasChecked = index == wasChecked.madeChoiceIndex ? 'checked' : '';
                    }

                    // returning generated objects with a unique field called _id which they need
                    // http://stackoverflow.com/questions/26358910/unique-id-for-label-input-pairs
                    var choiceId = qc.quizId + ':' + qc.questionIndex + ':' + index;
                    return {value: value, _id: choiceId, checked: wasChecked};
                });

                return qc;
            }
        }
    }
});

Template.theQuiz.events({
    'click #nextQuestion, click #prevQuestion': function(theEvent, theTemplate) {
        // get the selected choice
        var theChoice = document.querySelector('input[name="answer"]:checked');

        // store the choice in local minimongo and move to next question
        if (theChoice && theChoice.attributes.id.value) {
            // get the choice id, which consist of quizId:questionIndex:choiceIndex
            theChoice = theChoice.attributes.id.value;

            // create an array of idies from theChoice which represents quizId:questionIndex:choiceIndex
            var idies = theChoice.split(':');
            var quizId = idies[0];
            var questionIndex = idies[1];
            var madeChoiceIndex = idies[2];

            // see if there is already stored answer
            if (Answers.findOne({_id: quizId, 'QA.questionIndex': questionIndex})) {
                Answers._collection.update(
                    {_id: quizId, 'QA.questionIndex': questionIndex},
                    {$set: {'QA.$.madeChoiceIndex': madeChoiceIndex}},
                    {upsert: false}
                );
            // else store the answer
            } else {
                Answers._collection.update(
                    {_id: quizId},
                    {$addToSet: { QA: {questionIndex: questionIndex, madeChoiceIndex: madeChoiceIndex} } },
                    {upsert: true}
                );
            }

        } else {
            //alert('make a selection first');
        }
    },

    'click #nextQuestion': function(theEvent, theTemplate) {
        var currentQuestion = Session.get('currentQuestion');
        if (this.questions[++currentQuestion]) Session.set('currentQuestion', currentQuestion);
    },

    'click #prevQuestion': function(theEvent, theTemplate) {
        var currentQuestion = Session.get('currentQuestion');
        if (currentQuestion != 0) Session.set('currentQuestion', --currentQuestion);
    }
});
