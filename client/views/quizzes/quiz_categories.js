Template.quizCategories.helpers({
    categoryName: function () {
        return this;
    },
    filterPath: function() {

        //get the path from the mongo document
        var filterPath = this.path === null ? this._id : this.path;

        //replace all commas with forward slashes
        var regExPattern = /(\,)/g;
        filterPath = filterPath.toString().replace(regExPattern, '/');

        //remove a trailng slash
        filterPath = filterPath.replace(/\/$/, '');

        return filterPath;
    }
});
