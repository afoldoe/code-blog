(function(module) {
  var skillsController = {};

  //hides all sections except #skills
  skillsController.index = function() {
    $('#skills').siblings().slideUp(1000, function() {
      $('#skills').slideDown(1000, function() {
        $('html, body').animate({scrollTop: $('#projects').offset().top }, 500);
      });
    });
  };

  module.skillsController = skillsController;
})(window);
