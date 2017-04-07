function getData() {
  var api;
  var link = 'http://api.openweathermap.org/data/2.5/weather?';
  var latCoords = 'lat=';
  var lonCoords = '&lon=';
  var units = '&units=metric';
  var key = '31f8be28b38ac24b868953a57805d5d6&callback';
  var end = '&APPID=' + key + '=JSON_CALLBACK';
  var out = document.getElementById("output");
  $('#output').text('Loading...');
  if (!navigator.geolocation) {
    $('#output').text('Browser Not Supported');
  } else {
    navigator.geolocation.getCurrentPosition(function(position) {
      var longitude = position.coords.longitude;
      var latitude = position.coords.latitude;
      latCoords += latitude;
      lonCoords += longitude;
      api = link+latCoords+lonCoords+units+key+end;
      $.getJSON(api, function(data) {
        var lon = data.coord.lon;
        var lat = data.coord.lat;
        console.log([lon, lat]);
      });
    }, function() {
      $('#output').text('Unable to Determine Location');
    });
  }
}

$(document).ready(function() {
  getData();
});