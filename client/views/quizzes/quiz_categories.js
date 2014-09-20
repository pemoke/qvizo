Template.quizCategories.helpers({

    categoryName: function () {
        return this._id;
    },

    categoryURL: function () {
        // get the path property and construct the path
        var urlPath = this.path === null ? this._id : this.path + this._id;

        // replace commas in path with forward slashes
        urlPath = urlPath.replace(/,/g, '/');

        return (urlPath);
    }

});

Template.quizCategories.events({

    'click a': function (e, t) {
        //TODO change the collection
    }

});
