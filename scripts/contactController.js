(function(module) {
  var contactController = {};

  //hides all sections except #contact
  contactController.index = function() {
    $('#contact').siblings().slideUp(2000, function() {
      $('#contact').slideDown(2000);
    });
  };

  module.contactController = contactController;
})(window);
