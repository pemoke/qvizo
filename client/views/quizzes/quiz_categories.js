Template.quizCategories.helpers({

    categoryName: function () {
        return this._id;
    },

    categoryURL: function () {
        // get the path property and construct the path
        var urlPath = this.path === null ? (',' + this._id + ',') : encodeURIComponent(this.path + this._id + ',');
        urlPath = '?theCategory=' + encodeURIComponent(urlPath);

        return (urlPath);
    }

});

Template.quizCategories.events({

    'click a': function (e, t) {
        //TODO change the collection
    }

});
