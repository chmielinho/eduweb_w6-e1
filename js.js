(function() {
	
	var support = document.querySelector("#support"),
		positionOut = document.querySelector("#position"),
		findPos = document.querySelector("#findPos"),
		geo = document.querySelector("#geo");
	
	if (navigator.geolocation) {
		support.innerHTML = "Twoja przeglądarka wspiera geolokalizacji :)";
		support.classList.add("alert-success");
	} else {
		support.innerHTML = "Twoja przeglądarka nie wspiera geolokalizacji :(";
		support.classList.add("alert-danger");
	}
	
	function geoSuccess(position) {
		positionOut.innerHTML = '<a href="http://bing.com/maps/default.aspx?cp=' + position.coords.latitude + '~' + position.coords.longitude + '&lvl=17">Kliknij aby zobaczyć swoją pozycję na BING.</a><br><a href="https://www.google.pl/maps/@' + position.coords.latitude + ',' + position.coords.longitude + ',17z">Kliknij aby zobaczyć swoją pozycję na GOOGLE.</a>';
		
	}
	
	function geoError(errorObj) {
		var errorMessage;
		
		switch(errorObj.code) {
			case errorObj.PERMISSION_DENIED :
				errorMessage = "Brak pozwolenia do znalezienia lokalizacji.";
				break;
			case errorObj.POSITION_UNAVAILABLE :
				errorMessage = "Brak dostępu do sieci.";
				break;
			case errorObj.TIMEOUT :
				errorMessage = "Przekroczono czas oczekiwania.";
				break;
		}
		
		positionOut.innerHTML = "<strong>Wystąpił błąd: </strong>" + errorMessage;
	}
	
	findPos.onclick = function() {
		navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
	};
})();