(function(module) {
  scroll = {};

  // Two functions to fade nav in and out depending on how far you scroll from the top of the page.

  scroll.headerController = function() {
    $(window).scroll(function() {
      if($(window).scrollTop() < 200) {
        $('nav').addClass('scrollDown');
        $('nav').removeClass('scrollUp');
      } else {
        $('nav').addClass('scrollUp');
        $('nav').removeClass('scrollDown');
      }
    });
  };

  scroll.navController = function() {
    $(window).scroll(function() {
      if($(window).scrollTop() < 200) {
        $('.nav').addClass('scrollDown');
        $('.nav').removeClass('scrollUp');
      } else {
        $('.nav').addClass('scrollUp');
        $('.nav').removeClass('scrollDown');
      }
    });
  };
  
  module.scroll = scroll;
})(window);
