Template.quizResult.helpers({
    quiz: function() {

        var that = this;

        _.each(that.quiz.questions, function(question, questionIndex) {
            _.map(question.choices, function(choice) {

                // Add selected property to the choices
                choice = that.answers[questionIndex] == choice.index ?
                    _.extend(choice, {selected: 'selected'}) : choice;

                // Add correct property to the choices
                // currently the correct answer is the one with index == 0
                choice = choice.index == 0 ?
                    _.extend(choice, {correct: 'correct'}) : choice;

                return choice;
            });
        });


        // Count number of correct answers
        that.quiz.correctQuestionsCount = 0;
        _.each(that.answers, function(val, index) {
            that.quiz.correctQuestionsCount = that.answers[index] == 0 ?
                ++that.quiz.correctQuestionsCount : that.quiz.correctQuestionsCount;
        });

        // Count all questions
        that.quiz.questionsCount = that.quiz.questions.length;


        return that.quiz;

    }
});
