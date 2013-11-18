//= require vendor/jquery-1.9.1
//= require_self

$( function() {
  $(".slight-logo-letter-wrapper").hover(
    function () {
      timeout = $(this).data("timeout");
      $(this).removeClass("slight-logo-wrapper-hoverOff");
      if (timeout != undefined) {
        clearTimeout(timeout);
      }
    },
    function () {
      $(this).addClass("slight-logo-wrapper-hoverOff");
      var timeout = setTimeout($.proxy(function() {
        $(this).removeClass("slight-logo-wrapper-hoverOff");
      }, this), 3000);
      $(this).data("timeout", timeout);
    }
  );
});