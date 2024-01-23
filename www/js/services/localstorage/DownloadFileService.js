

function downloadFile(URL) {
  
	// !! Assumes variable fileURL contains a valid URL to a path on the device,
  //    for example, cdvfile://localhost/persistent/path/to/downloads/

	document.addEventListener("deviceready", onDeviceReady, false);
	function onDeviceReady() {
			console.log(FileTransfer);
	}
	var fileTransfer = new FileTransfer();
	var uri = encodeURI(URL);
	var fileURL = "cdvfile://localhost/persistent/"+  URL.split('/').pop();
	fileTransfer.download(
			uri,
			fileURL,
			function(entry) {
					console.log("download complete: " + entry.toURL());
					var tracts = JSON.parse(localStorage.tracts);
					for (var i = 0; i < tracts.length; i++) {
						 alert (tracts[i].website + "is website for " + i);
						 if(URL === tracts[i].website){  //look for match with name
								 tracts[i].file =  entry.toURL(); 
                 tracts[i].local = "Y";
								 alert("Found for " + entry.toURL());
								 break;  //exit loop since you found the tract
						 }
					}
					localStorage.setItem("tracts", JSON.stringify(tracts));  //put the object back
			},
			function(error) {
					console.log("download error source " + error.source);
					console.log("download error target " + error.target);
					console.log("upload error code" + error.code);
					alert("download error source " + error.source);
					alert("download error target " + error.target);
					alert("error code" + error.code);
			},
			false,
			{
					headers: {
							"Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
					}
			}
	);
}
