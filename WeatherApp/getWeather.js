var jsonAPI = '';

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
      /************************
      Construct the API Call, making sure to
      insert the coordinates where appropriate
      *************************/
      $.getJSON('apiCall.json', function(data) {
        for (var key in data) {
          if (data.hasOwnProperty(key)) {
            if (key === 'latCoords') {
              jsonAPI += data[key] + lat;
            } else if (key === 'lonCoords') {
              jsonAPI += data[key] + lon;
            } else {
              jsonAPI += data[key];
            }
          }
        }
        /************************
        Parse the API Response and populate the app with the data
        *************************/
        $.getJSON(jsonAPI, function(response) {
          console.log(response);
          var weather = response['weather'][0];
          $('#Temp').text(response.main.temp);
          $('#City').text(response.name + ', ' + response.sys.country);
          $('#Conditions').text(weather.main);
        });
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