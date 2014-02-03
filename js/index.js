var pictureSource;
var destinationType;

var app = {

	initialize: function() {
		this.bindEvents();
	},

	bindEvents: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},

	onDeviceReady: function() {
		pictureSource = navigator.camera.PictureSourceType;
		destinationType = navigator.camera.DestinationType;

		// var ref = window.open('http://www.google.com.br', '_blank', 'location=yes');
		// ref.addEventListener('loadstart', function(event) { alert('start: ' + event.url); });
		// ref.addEventListener('loadstop', function(event) { alert('stop: ' + event.url); });
		// ref.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
		// ref.addEventListener('exit', function(event) { alert(event.type); });
	},

	capturePhoto: function(){
		navigator.camera.getPicture(this.onPhotoDataSuccess, this.onFail, {
			quality: 60,
			destinationType: destinationType.DATA_URL
		});
	},

	onPhotoDataSuccess: function(imageData) {
		var image = document.getElementById('photoImage'); // pegando elemento img
		image.style.display = 'block'; // aplica block ao elemento image
		image.src = "data:image/jpeg;base64," + imageData; // jogando a imagem no elemento

		navigator.notification.alert(
			'Sua foto foi tirada com sucesso', // mensagem
			null, // callback
			'Foto', // titulo
			'OK' // nome do botao
		);
	},

	onFail: function(message) {
		alert('Erro: ' + message);

		navigator.notification.alert(
			'Ocorreu um erro no processo, tente novamente.', // mensagem
			null, // callback
			'Foto', // titulo
			'OK' // nome do botao
		);
	}

};

app.initialize();