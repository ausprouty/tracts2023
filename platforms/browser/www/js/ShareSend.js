var ShareSend = function () {
	// this is the complete list of currently supported params you can pass to the plugin (all optional) 
	var options = {
	  message: 'Here is a link to the outline we were looking at today. Let\'s talk more!   ', // not supported on some apps (Facebook, Instagram) 
	  subject: 'Here is the link to the outline', // fi. for email 
	  files: ['', ''], // an array of filenames either locally or remotely 
	  url: 'http://hereslife.com/4sl',
	  chooserTitle: 'Pick an app' // Android only, you can override the default share sheet title 
	}
	 
	var onSuccess = function(result) {
	  console.log("Share completed? " + result.completed); // On Android apps mostly return false even while it's true 
	  console.log("Shared to app: " + result.app); // On Android result.app is currently empty. On iOS it's empty when sharing is cancelled (result.completed=false) 
	}
	 
	var onError = function(msg) {
	  console.log("Sharing failed with message: " + msg);
	}
	 
	window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);
}


