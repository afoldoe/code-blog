(function(module) {
  var aboutController = {};

  //hides all sections except #about
  aboutController.index = function() {
    $('#about').siblings().slideUp(2000, function() {
      $('#about').slideDown(2000);
    });
  };

  module.aboutController = aboutController;
})(window);
