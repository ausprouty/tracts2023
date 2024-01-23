var TractView = function(tract) {

	this.initialize = function() {
		this.$el = $('<div/>');
	};

	this.render = function() {
		 var content = this.template(tract);
		this.$el.html(content);
		return this;
	};
	

	this.initialize();

}