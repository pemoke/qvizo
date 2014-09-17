Template.quizCategories.helpers({

    categoryName: function () {
        return this.toString();
    },

    categoryURL: function () {
        var url = this.toString();
        return encodeURIComponent(url);
    }

});

Template.quizCategories.events({

    'click a': function (e, t) {
        console.log(this);
        //TODO change the collection
    }

});
