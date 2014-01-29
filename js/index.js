var app = {

	initialize: function() {
		this.bindEvents();
	},

	bindEvents: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},

	onDeviceReady: function() {
		var ref = window.open('http://www.google.com', '_blank', 'location=yes');
		ref.addEventListener('loadstart', function(event) { alert('start: ' + event.url); });
		ref.addEventListener('loadstop', function(event) { alert('stop: ' + event.url); });
		ref.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
		ref.addEventListener('exit', function(event) { alert(event.type); });
	},

};