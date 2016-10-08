(function(module) {
  var homeController = {};
    

  homeController.index = function() {
    window.scrollTo(0,0, 1000);
    $('.fa-bicycle').click(function() {
      $('.nav').toggle('slow');
    }); 
    scroll.headerController();
    scroll.navController();
    $('main').show();
    //displays and hides header for the page base on length from the top of the page
    Project.fetchAll(); //gets project informaton and loads the page
  };
  
  module.homeController = homeController;
  
})(window);
