(function(module) {
  var projectController = {};

  //hides all sections except #projects
  projectController.index = function() {
    // Project.fetchAll();
    $('#projects-section').siblings().slideUp(1000, function() {
      $('#projects-section').slideDown(1000, function() {
        $('html, body').animate({scrollTop: $('#projects-section').offset().top }, 500);

      });
    });
  };

  module.projectController = projectController;
})(window);
