(function(module) {
  var projectController = {};

  //hides all sections except #projects
  projectController.index = function() {
    $('#projects').siblings().slideUp(1000, function() {
      $('#projects').slideDown(1000, function() {
        $('html, body').animate({scrollTop: $('#projects').offset().top }, 500);

      });
    });
  };

  module.projectController = projectController;
})(window);
