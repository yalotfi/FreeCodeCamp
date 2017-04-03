'http://api.openweathermap.org/data/2.5/weather?lat=36&lon=-77&units=metric&APPID=31f8be28b38ac24b868953a57805d5d6&callback=JSON_CALLBACK'

var call = 'http://api.openweathermap.org/data/2.5/weather?';
var coords = 'lat=' + '&lon=';
var units = '&units=metric';
var key = '31f8be28b38ac24b868953a57805d5d6&callback';
var end = '&APPID=' + key + '=JSON_CALLBACK';
var api = call + coords + units + end;

function getLocation() {
    var geo = navigator.geolocation
    if (geo) {
        geo.getCurrentPosition(showPosition);
    } else {
        console.log('Browser Not Supported');
    }
}
function showPosition(position) {
    var pos = position.coords
    console.log(pos.latitude);
    console.log(pos.longitude);
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