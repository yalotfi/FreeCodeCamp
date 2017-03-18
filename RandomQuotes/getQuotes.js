var quote;
var author;
var link = "https://twitter.com/intent/tweet?text=";
var tweet;

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
      quote = res.quote;
      author = res.author;
      tweet = '"' + quote + '"' + " - " + author;

      $("#quote-text").text(quote);
      $("#author").text(author);
      $("#tweet-quote").attr("href", link + encodeURIComponent(tweet));
    }
  });
}

$(document).ready(function() {
  getQuote();
  $("#new-quote").on("click", getQuote);
  $("#tweet-quote").on("click", function() {
    $("#tweet-quote").attr("href", link + encodeURIComponent(tweet));
  });
}); 
