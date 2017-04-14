$.ajax({
  url: "https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json",
  dataType: 'json',
  type: 'POST',
  headers: { 'Api-User-Agent': 'Example/1.0' },
  success: function(data) {
   console.log(data)
  }
});