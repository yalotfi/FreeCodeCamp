var api;
var link = 'http://api.openweathermap.org/data/2.5/weather?';
var latCoords = 'lat=';
var lonCoords = '&lon=';
var units = '&units=metric';
var key = '31f8be28b38ac24b868953a57805d5d6&callback';
var end = '&APPID=' + key + '=JSON_CALLBACK';

function getData() {
  var geo = navigator.geolocation
  var out = document.getElementById("output");
  out.innerHTML = '<p>Locating...</p>';
  if (!geo) {
    out.innerHTML = '<p>Browser Not Supported</p>';
  } else {
    geo.getCurrentPosition(function(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      latCoords += latitude;
      lonCoords += longitude;
      api = link+latCoords+lonCoords+units+key+end;
    }, function() {
      out.innerHTML = '<p>Unable to Determine Location</p>';
    });
  }
}

getData();