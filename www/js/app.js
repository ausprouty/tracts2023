// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());
    TractListView.prototype.template =  Handlebars.compile($("#tract-list-tpl").html());
	TractView.prototype.template = Handlebars.compile($("#tract-tpl").html());
	HelpView.prototype.template = Handlebars.compile($("#help-tpl").html());
	var slider = new PageSlider($('body'));
	var service = new TractService();
	service.initialize().done(function () {
		router.addRoute('', function() {
				slider.slidePage(new HomeView(service).render().$el);
				$('.right, .left').remove();
		});
		router.addRoute('help', function() {
			   $( ".bar-header-secondary" ).remove();
				slider.slidePage(new HelpView(service).render().$el);
		});
		router.addRoute('tract/:id', function(id) {
				service.findById(parseInt(id)).done(function(tract) {
						slider.slidePage(new TractView(tract).render().$el);
				});
				$( ".bar-header-secondary" ).remove();
				$( ".bar-tab" ).remove();
		});
		router.addRoute('share', function() {
			   $( ".bar-header-secondary" ).remove();
				slider.slidePage(new ShareView(service).render().$el);
		});

		router.start();
	});
		

    /* --------------------------------- Event Registration -------------------------------- */
	document.addEventListener('deviceready', function () {
		StatusBar.overlaysWebView( false );
		StatusBar.backgroundColorByHexString('#ffffff');
		StatusBar.styleDefault();
		FastClick.attach(document.body);
		if (navigator.notification) { // Override default HTML alert with native dialog
				window.alert = function (message) {
						navigator.notification.alert(
								message,    // message
								null,       // callback
								"Workshop", // title
								'OK'        // buttonName
						);
				};
		}
	}, false
	);
	$(window).on('hashchange', $.proxy(this.route, this));

  /* ---------------------------------- Local Functions ---------------------------------- */
		
}());