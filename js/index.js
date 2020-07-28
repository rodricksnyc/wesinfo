$(document).ready(function() {


	if ($(window).width() >= 1199){

		$(".navbar .dropdown-toggle").mouseenter(function () {
			$(this).parent().toggleClass("show");
			$(this).parent().find(".dropdown-menu").toggleClass("show");
		});


		$( ".navbar .dropdown-menu" ).mouseleave(function() {
			$(this).removeClass("show");
		});


		$(".right .nav-link").click(function () {

			$(".right .menu2").toggleClass("showIt");
		});

		$('.contactUsOverlay').on('click', function(e) {

			$(".right .menu2").toggleClass("showIt");

		})

	}



	// var proxy = 'https://cors-anywhere.herokuapp.com/';

	var Ip = 'https://ipinfo.io/json';

	$.getJSON(Ip, function(data) {
		var city = data.city;
		var region = data.region;
		var country = data.country;

		// var KEY = '&APPID=b2f2b923be22181ef89baa544605b888';

		var URL = 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?id=4367175&appid=b2f2b923be22181ef89baa544605b888'

		// var URL ='http://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + region + country + KEY;

		$.getJSON(URL, function(data) {
			var type = data.weather[0].main;  //array 0 index
			var id = data.weather[0].id; //array 0 index
			var city = data.name;

			var tempCel = Math.round(data.main.temp - 273.15);
			var tempC = tempCel + '°C';
			var weather = data.weather[0].description;
			var tempF = Math.round(tempCel * (9 / 5) + 32) + '°F';
			var icon = data.weather[0].icon;
			var tempBool = true;

			//Output data to display on the page
			$('#city').text(city);
			$('#state').text(region);
			$('#temp').text(tempF); //Show Fahrenheit by Default
			var weatherIcon = 'http://openweathermap.org/img/w/' + icon + '.png';
			$('#wIcon').html('<img src=' + weatherIcon + '>');


		});
	});




});
