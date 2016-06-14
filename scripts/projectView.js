(function(module) {
  var projectView = {};

  projectView.setTeasers = function() {
    $('.project-body *:nth-of-type(n+1)').hide(); // Hide elements beyond the first in any artcile body.
    //event hander that shows more article info once clicked
    $('.read-on').on('click', function(e) {
      e.preventDefault();//stops the link firing
      $(this).hide();//hides the read-on button
      $(this).parent().find('p').show(); //shows the in depth project info

    });
  };

  projectView.initIndexPage = function() {
    //appends each project to the page
    $('#projects').empty();
    Project.all.forEach(function(a){
      $('#projects').append(a.toHtml());
    });
    // projectView.handleMainNav();
    projectView.setTeasers();

  };
  module.projectView = projectView;
})(window);
