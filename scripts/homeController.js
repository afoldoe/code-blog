(function(module) {
  var homeController = {};
  scroll.headerController();
  scroll.navController();

  //displays and hides header for the page base on length from the top of the page
  homeController.index = function() {
    window.scrollTo(0,0, 2000);
    $(window).scroll(function() {
      if($(window).scrollTop() > 100) {
        $('#header').addClass('scrollDown');
        $('#header').removeClass('scrollUp');
      } else {
        $('#header').removeClass('scrollDown');
        $('#header').addClass('scrollUp');
      }
    });
    Project.createTable(); //creates webdb table for projects
    Project.fetchAll(projectView.initIndexPage); //gets project informaton and loads the page

  };

  module.homeController = homeController;
})(window);
