var isImgLoad = function(src, timeout, callback) {
  var i = 1;
  var $body = $("body");
  var $imgNode = $("<img id='isImgLoad' style='display: none;'>");

  $body.append($imgNode);

  function trigger() {
    if(i == timeout) {
      clearInterval(timmer);
      return "timeout";
    } 
    $("#isImgLoad").attr("src", src);
    i++;
  }
  var timmer = setInterval(trigger, 1000);

  $("#isImgLoad").on("load", function() {
    clearInterval(timmer);
    callback();
    
    $("#isImgLoad").remove();
  });
}