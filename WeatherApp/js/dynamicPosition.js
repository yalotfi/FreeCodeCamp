function dynamicResize() {
  $(window).resize(function() {
    width = $(window).width();
    height = $(window).height();
    div = $('#mainDiv')
    div.css('top', height/4);
    div.css('left', width/4);
    console.log(width, height);
    console.log(div.css('top'), div.css('left'))
  });
}

$(document).ready(function() {
  // $('#mainDiv').css('top', '50px');
  // $('#mainDiv').css('left', '50px');
  dynamicResize();
})