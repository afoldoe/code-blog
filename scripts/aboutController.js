(function(module) {
  var aboutController = {};

  //hides all sections except #about
  aboutController.index = function() {
    $('#about').siblings().slideUp(1000, function() {
      $('#about').slideDown(1000, function() {
        $('html, body').animate({scrollTop: $('#about').offset().top }, 500);
      });
    });
  };

  module.aboutController = aboutController;
})(window);
