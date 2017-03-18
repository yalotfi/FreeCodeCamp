function getQuote() {
  $.ajax({
    headers: {
      "X-Mashape-Key": "37nOk8ri8emshE0X7ZcLsndR3gBVp1QYrzgjsnhu4f9mosWUfH",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    url: "https://andruxnet-random-famous-quotes.p.mashape.com/cat=",
    success: function(response) {
      var res = JSON.parse(response);
      $("#quote-text").text(res.quote);
      $("#author").text(res.author);
    }
  });
}

$(document).ready(function() {
  getQuote();
  $("#new-quote").on("click", getQuote);
});
