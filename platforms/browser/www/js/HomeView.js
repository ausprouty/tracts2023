var HomeView = function (service) {
	var tractListView;
	
	this.initialize = function () {
        // Define a div wrapper for the view (used to attach events)
        this.$el = $('<div/>');
		console.log ('HOmeview Initialize');
        this.$el.on('keyup', '.search-key', this.findByName);
        tractListView = new TractListView();
        this.render();
	};
	this.render = function() {
		this.$el.html(this.template());
		$('.content', this.$el).html(tractListView.$el);
		return this;
	};
	this.findByName = function() {
		service.findByName($('.search-key').val()).done(function(tracts) {
				tractListView.setTracts(tracts);
		});
	};
	this.findAll = function() {
		service.findAll().done(function(tracts) {
				tractListView.setTracts(tracts);
		});
	};

	this.initialize();

    $(function() {
	  // Handler for .ready() called.
	  service.findAll().done(function(tracts) {
				tractListView.setTracts(tracts);
		});
	});
}

