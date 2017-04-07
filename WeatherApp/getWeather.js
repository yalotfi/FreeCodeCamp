var api;
var link = 'http://api.openweathermap.org/data/2.5/weather?';
var latCoords = 'lat=';
var lonCoords = '&lon=';
var units = '&units=metric';
var key = '31f8be28b38ac24b868953a57805d5d6&callback';
var call = '&APPID=' + key;

function getData() {
  /************************
  Check if geolocation is possible then pull API data
  and populate webpage.
  *************************/
  if (!navigator.geolocation) {
    $('#Status').append('<p>Browser Not Supported</p>');
  } else {
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
      latCoords += lat;
      lonCoords += lon;
      api = link + latCoords + lonCoords + call + units;
      $.getJSON(api, function(data) {
        var weather = data['weather'][0];
        $('#Temp').text(data.main.temp);
        $('#City').text(data.name + ', ' + data.sys.country);
        $('#Conditions').text(weather.main);
        console.log(data)
      });
    }, function() {
      $('#Status').append('<p>Unable to Determine Location</p>');
    });
  }
}

$(document).ready(function() {
  /************************
  City element will always be populated and a new
  element will be created if an error occurs.
  *************************/
  $('#City').text('Locating...');
  getData();
});