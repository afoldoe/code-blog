(function(module) {
  var skillsController = {};

  //hides all sections except #skills
  skillsController.index = function() {
    $('#skills').siblings().slideUp(2000, function() {
      $('#skills').slideDown(2000);
    });
  };

  module.skillsController = skillsController;
})(window);
