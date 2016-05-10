var projectView = {};

projectView.handleMainNav = function() {
  $('#navDiv').on('click', 'li', function(e) {
    e.preventDefault();
    var tab = $(this).attr('data-content');
    console.log(tab);
    $('.tab-content').hide();
    $('section#' + tab).show();
  });
};

projectView.setTeasers = function() {
  $('.project-body *:nth-of-type(n+2)').hide(); // Hide elements beyond the first 2 in any artcile body.
  //event hander that shows more article info once clicked
  $('.read-on').on('click', function(e) {
    e.preventDefault();//stops the link firing
    $(this).hide();//hides the read-on button
    $(this).parent().find('p').show(); //shows the in depth project info

  });
};


$(document).ready(function() {
  projectView.handleMainNav();
  projectView.setTeasers();
});
