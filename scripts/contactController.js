(function(module) {
  var contactController = {};

  //hides all sections except #contact
  contactController.index = function() {
    $('#contact').siblings().slideUp(1000, function() {
      $('#contact').slideDown(1000, function() {
        $('html, body').animate({scrollTop: $('#contact').offset().top }, 500);
      });
    });
  };

  module.contactController = contactController;
})(window);
