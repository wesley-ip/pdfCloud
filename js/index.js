var app = {

	initialize: function() {
		this.bindEvents();
	},

	bindEvents: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},

	onDeviceReady: function() {

		var fileTransfer = new FileTransfer();
		var uri = encodeURI("http://192.168.10.37/macmini/steve-jobs.pdf");
		var filePath = uri.substring(uri.lastIndexOf('/')+1);

		// fileTransfer.onprogress = function(progressEvent) {
		// 	if (progressEvent.lengthComputable) {
		// 		loadingStatus.setPercentage(progressEvent.loaded / progressEvent.total);
		// 	} else {
		// 		loadingStatus.increment();
		// 	}
		// };

		fileTransfer.download (
			uri, // source
			filePath, //target
			function(entry) { // successCallback
				alert("download complete: " + entry.fullPath);
			},

			function(error) { // errorCallback
				alert("download error source " + error.source);
				alert("download error target " + error.target);
				alert("upload error code" + error.code);
			},

			false, // trustAllHosts

			{
				headers: { // options
					"Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
				}
			}
		);

		// var ref = window.open('http://www.google.com.br', '_blank', 'location=yes');
		// ref.addEventListener('loadstart', function(event) { alert('start: ' + event.url); });
		// ref.addEventListener('loadstop', function(event) { alert('stop: ' + event.url); });
		// ref.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
		// ref.addEventListener('exit', function(event) { alert(event.type); });
	}

};