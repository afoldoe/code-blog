(function(module) {
  scroll = {};

  scroll.headerController = function() {
    $(window).scroll(function() {
      if($(window).scrollTop() < 200) {
        $('nav').addClass('scrollDown');
        $('nav').removeClass('scrollUp');
        //settime

      } else {
        $('nav').addClass('scrollUp');
        $('nav').removeClass('scrollDown');
      }
    });
  };

  scroll.navController = function() {
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
  module.scroll = scroll;
})(window);
