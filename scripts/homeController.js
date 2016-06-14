(function(module) {
  var homeController = {};
  scroll.headerController();
  scroll.navController();

  homeController.index = function() {
    window.scrollTo(0,0);
    $(window).scroll(function() {
      if($(window).scrollTop() > 100) {
        $('#header').addClass('scrollDown');
        $('#header').removeClass('scrollUp');
      } else {
        $('#header').removeClass('scrollDown');
        $('#header').addClass('scrollUp');
      }
    });
    
    Project.createTable();
    Project.fetchAll(projectView.initIndexPage);
    repos.requestRepos(repoView.index);
  };

  module.homeController = homeController;
})(window);
