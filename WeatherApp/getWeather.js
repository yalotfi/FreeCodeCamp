var jsonAPI = '';

function decode(str) {
  var textArea = document.createElement('textarea');
  textArea.innerHTML = str;
  return textArea.value;
}

function toFahrenheit(C) {
  return (C * 9 / 5) + 32;
}

function toCelsius(F) {
  return (F - 32) * 5 / 9;
}

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
        $.getJSON(jsonAPI, function(res) {
          var weather = res['weather'][0];
          $('#City').text(res.name + ', ' + res.sys.country);
          $('#TempC').text(Math.round(res.main.temp));
          $('#TempF').text(Math.round(toFahrenheit(res.main.temp)));
          $('#Conditions').text(weather.main);
        });
      });
    }, function() {
      $('#Status').append('<p>Unable to Determine Location</p>');
    });
  }
}

function toggleTemp() {
  $('button').on('click', function() {
    /************************
    Convert Celsius to fahrenheit and change symbol
    *************************/
    var degC = '&#8451;';
    var degF = '&#8457;';
    if ($(this).text() == decode(degC)) {
      var tempC = parseInt($('#Temp').val());
      $(this).text(decode(degF));
      $('#Temp').text(toFahrenheit(tempC));
    } else {
      var tempF = parseInt($('#Temp').val());
      $(this).text(decode(degC));
      $('#Temp').text(toCelsius(tempF));
    }
  });
}

$(document).ready(function() {
  /************************
  City element will always be populated and a new
  Status element will be created if an error occurs.
  *************************/
  $('#City').text('Locating...');
  getData();
  toggleTemp();
});