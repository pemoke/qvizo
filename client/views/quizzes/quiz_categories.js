Template.quizCategories.helpers({
    categoryName: function () {
        console.log(this._id);
        var id;
        this._id === undefined ? id = null : id = this._id;
        console.log(this._id);
        var cursor = Quizzes.find({parent: id});
        return cursor;
    }
});
