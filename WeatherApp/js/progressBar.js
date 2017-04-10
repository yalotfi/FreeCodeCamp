$.ajax({
  type: 'POST',
  url: '/',
  data: {},
  beforeSend: function(XMLHttpRequest) {
    XMLHttpRequest.upload.addEventListener('progress', function(event) {
      if (event.lengthComputable) {
        var percentComplete = event.loaded / event.total;
        console.log(percentComplete * 100 + '%');
      }
    }, false);
    XMLHttpRequest.addEventListener('progress', function(event) {
      if (event.lengthComputable) {
        var percentComplete = event.loaded / event.total;
        console.log(percentComplete * 100 + '%');
      }
    }, false);
  },
  success: function(data) {}
});

