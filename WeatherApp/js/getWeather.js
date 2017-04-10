var jsonAPI = '';

function decode(str) {  // Unused, but useful function to decode entities
  var textArea = document.createElement('textarea');
  textArea.innerHTML = str;
  return textArea.value;
}

function toFahrOrCels(temp, unit='F') {  // Default convert to Fahrentheit
  return (unit) ? ((temp * 9 / 5) + 32) : ((temp - 32) * 5 / 9);
}

function loading() {
  /************************
  Default values for loading period until data is ready.
  *************************/
  $('#City').text('Locating...');
  $('#TempC').text('--');
  $('#TempF').text('--');
  $('#Conditions').text('--');
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
      $.getJSON('apiCall.json', function(res) {
        for (var key in res) {
          if (res.hasOwnProperty(key)) {
            if (key === 'latCoords') {
              jsonAPI += res[key] + lat;
            } else if (key === 'lonCoords') {
              jsonAPI += res[key] + lon;
            } else {
              jsonAPI += res[key];
            }
          }
        }
        /************************
        Parse the API Response and populate the app with the data
        *************************/
        $.getJSON(jsonAPI, function(data) {
          var weather = data['weather'][0];
          $('#City').text(data.name + ', ' + data.sys.country);
          $('#TempC').text(Math.round(data.main.temp));
          $('#TempF').text(Math.round(toFahrOrCels(data.main.temp)));
          $('#Conditions').text(weather.main);
        });
      });
    }, function() {
      $('#Status').append('<p>Unable to Determine Location</p>');
    });
  }
}

function toggleTemp() {
  /************************
  Default show Fahrenheit and toggle  between F and C
  *************************/
  $('#divF').show(); $('#divC').hide();
  $('#buttonC').click(function() {
    $('#divC').hide(); $('#divF').show();
  });
  $('#buttonF').click(function() {
    $('#divF').hide(); $('#divC').show();
  });
}

$(document).ready(function() {
  loading();
  getData();
  toggleTemp();
});