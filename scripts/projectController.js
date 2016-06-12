(function(module) {
  var projectController = {};

  projectController.index = function() {
    Project.createTable();
    Project.fetchAll(projectView.initIndexPage);
    $('#projects').show().siblings().hide();
  };

  module.projectController = projectController;
})(window);
