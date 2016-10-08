(function(module){
  function getCompiledTemplate(name){
    return $.ajax({
      type: 'GET',
      url: './hbs/' + name + '.hbs'
    })
    .then(function(html){
      // console.log(html);
      return Handlebars.compile(html);
    });
  }
  module.getCompiledTemplate = getCompiledTemplate;
})(window);