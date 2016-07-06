(function(module) {
  var projectController = {};

  //hides all sections except #projects
  projectController.index = function() {
    Project.fetchAll(projectView.initIndexPage);
    $('#projects').siblings().slideUp(2000, function() {
      $('#projects').slideDown(2000);
    });
  };

  module.projectController = projectController;
})(window);
