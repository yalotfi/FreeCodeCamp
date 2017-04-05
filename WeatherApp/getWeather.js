//'http://api.openweathermap.org/data/2.5/weather?lat=36&lon=-77&units=metric&APPID=31f8be28b38ac24b868953a57805d5d6&callback=JSON_CALLBACK'

var api = 'http://api.openweathermap.org/data/2.5/weather?';
var latCoords = 'lat=';
var lonCoords = '&lon=';
var units = '&units=metric';
var key = '31f8be28b38ac24b868953a57805d5d6&callback';
var end = '&APPID=' + key + '=JSON_CALLBACK';

function getLocation() {
  var geo = navigator.geolocation
  var out = document.getElementById("output");

  function showPosition(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      out.innerHTML = latitude + ' ' + longitude;
  }

  function errorHandle() {
    out.innerHTML = '<p>Unable to Determine Location</p>';
  }

  out.innerHTML = '<p>Locating...</p>';

  if (!geo) {
      out.innerHTML = '<p>Browser Not Supported</p>';
  } else {
      geo.getCurrentPosition(showPosition, errorHandle);
  }
}

getLocation();

// var geo = navigator.geolocation;
// var pos = position.coords;
// function getLat() {
//   geo.getCurrentPosition(showLat);
// }

// function getLon() {
//   geo.getCurrentPosition(showLon);
// }

// function showLat(position) {
//     console.log(pos.latitude);
// }

// function showLon(position) {
//     console.log(pos.longitude);
// }

// getLat();
// getLon();

// console.log(api);