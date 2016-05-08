var projects = [];
var navbutton = document.getElementById("buttonNav");
navbutton.addEventListener("click", showMenu);
function showMenu() {
  var div = document.getElementById("navDiv");
  if (div.style.display != "none") {
		div.style.display = "none";
	}
	else {
		div.style.display = "block";
	}
}

function Project (opts) {
  this.publishedOn = opts.publishedOn;
  this.author = opts.author;
  this.title = opts.title;
  this.category = opts.category
}

Project.prototype.toHTML = function() {
  //clones section for projects to be inputed
  var $newProject = $('article.template').clone();
  $newProject.attr('data-category', this.category);

  $newProject.find('h1').html(this.title);

  $newProject.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago')
  $newProject.append('<hr>');


  $newProject.removeClass('template');
  return $newProject;
}

projectData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

projectData.forEach(function(ele) {
  projects.push(new Project(ele));
})

projects.forEach(function(a){
  $('#projects').append(a.toHtml())
});
