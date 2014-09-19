Template.quizCategories.helpers({

    categoryName: function () {
        return this._id;
    },

    categoryURL: function () {
        console.log(this.ancestors);
        var url = this.ancestors.join('/');
        //url = url == '' ? this._id : url;
        return encodeURIComponent(this._id);
    }

});

Template.quizCategories.events({

    'click a': function (e, t) {
        //TODO change the collection
    }

});
