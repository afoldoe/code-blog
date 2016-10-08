(function(module) {
  var projectView = {};

  projectView.setTeasers = function() {
    $('.project-body *:nth-of-type(n+1)').hide();
    //event hander that shows more article info once clicked
    $('.read-on').on('click', function(e) {
      e.preventDefault();
      $(this).hide();
      $(this).parent().find('p').show(); //shows the in depth project info
    });
  };

  //function to append each project to the page
  // projectView.initIndexPage = function() {
  //   $('#projects').empty();
  //   console.log('init called', Project.all);
  //   Project.all.forEach(function(project){
  //     $('#projects').append(project.toHtml());
  //   });
  //   projectView.setTeasers();

  // };
  module.projectView = projectView;
})(window);
