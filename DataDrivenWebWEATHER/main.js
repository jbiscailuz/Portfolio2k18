$(".rainz").hide();
$(".thundery").hide();
$(".cleary").hide();
$(".cloudy").hide();
// $(".drizzley").hide();
$(".snowy").hide();
$(".atmospherey").hide();

console.log("working page");

function bringAPI() {

  console.log("working press function");

  var city = document.getElementById("Cname").value;

  var url1 = 'http://api.openweathermap.org/data/2.5/weather?q=';
  var url2 = '&APPID=fd9db60b3d7d7b1a973ba7c4dd82c355';
  var city = document.getElementById("Cname").value;

  $.getJSON(url1 + city + url2, function(json) {

    console.log(url1 + city + url2);

    var cityWeather = json.weather[0].main;

    console.log(cityWeather);

    //Rain

    var rainy = ["Rain"];
    var idxRainy = parseInt(rainy.indexOf(cityWeather));
		//IndexOf - Return value: The first index of the element in the array; -1 if not found.
    if (idxRainy != -1) {
      $(".clickForm").hide();
      $(".rainz").show();
      console.log("hey, rain is working.");
    };

    //Thunderstorm

    var thundery = ["Thunderstorm"];
    var idxThundery = parseInt(thundery.indexOf(cityWeather));
    if (idxThundery != -1) {
			$(".clickForm").hide();
			$(".thundery").show()
      console.log("hey, thunder is working.");
    };

    //Clear

    var cleary = ["Clear"];
    var idxCleary = parseInt(cleary.indexOf(cityWeather));
    if (idxCleary != -1) {
			$(".clickForm").hide();
			$(".cleary").show();
      console.log("hey, clear is working.");
    };

    //Clouds

    var cloudy = ["Clouds"];
    var idxCloudy = parseInt(cloudy.indexOf(cityWeather));
    if (idxCloudy != -1) {
			$(".clickForm").hide();
			$(".cloudy").show();
      console.log("hey, clouds is working.");
    };

    //Drizzle

    var drizzley = ["Drizzle"];
    var idxDrizzley = parseInt(drizzley.indexOf(cityWeather));
    if (idxDrizzley != -1) {
			$(".clickForm").hide();
			// $(".drizzley").show();
      $(".rainz").show();
      console.log("hey, drizzle is working.");
    };

    //Snow

    var snowy = ["Snow"];
    var idxSnowy = parseInt(snowy.indexOf(cityWeather));
    if (idxSnowy != -1) {
			$(".clickForm").hide();
			$(".snowy").show();
      console.log("hey, snow is working.");
    };

    //Atmosphere

    var atmospherey = ["Atmosphere"];
    var idxAtmospherey = parseInt(atmospherey.indexOf(cityWeather));
    if (idxAtmospherey != -1) {
			$(".clickForm").hide();
			$(".atmospherey").show();
      console.log("hey, atmosphere is working.");
    };


  });
}
