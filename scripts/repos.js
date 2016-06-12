(function(module) {
  var repos = {};

  repos.all = [];

  repos.requestRepos = function() {
    $.ajax({
      url: 'https://api.github.com/user/repos',
      type: 'GET',
      headers: {
        'Authorizaton' : 'token' + githubToken
      }
    })
    .done(function(data, message, xhr) {
      repos.all = data;
    })
    .fail(function(data, message, xhr) {
      console.log('noooooooope!');
    })
    .then(callback);
  };

  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
