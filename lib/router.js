Router.configure({
    layoutTemplate: ''
});

Router.map(function() {
    this.route('', {path: '/'});
});

Router.onAfterAction(function () {
    $(document).foundation(); // or single plugin
});