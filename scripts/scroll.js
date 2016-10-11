(function(module) {
  scroll = {};

  // Two functions to fade nav in and out depending on how far you scroll from the top of the page.

  scroll.navController = function() {
    $(window).scroll(function() {
      if($(window).scrollTop() < 200) {
        $('nav ul').slideUp('slow');
      } else {
        $('nav ul').slideDown('slow');
      }
    });
  };

  
  module.scroll = scroll;
})(window);
