var TractListView = function () {

    var tracts;

    this.initialize = function() {
        this.$el = $('<div/>');
        this.render();
    };

    this.setTracts = function(list) {
        tracts = list;
        this.render();
    }

    this.render = function() {
        this.$el.html(this.template(tracts));
        return this;
    };

    this.initialize();

}