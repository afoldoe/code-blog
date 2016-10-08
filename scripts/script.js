(function(module) {
  Project.all = [];

  //assigns the propeties of opts be the properties of each new Project
  function Project (opts) {
    Object.keys(opts).forEach(function(e, index, keys) {
      this[e] = opts[e];
    }, this);
  }

  //returns each project in Project.all
  Project.loadAll = function() {
    $('#projects').empty();
    Project.all.forEach(function(project) {
      getCompiledTemplate('projects').then(function(handlebarsCompile) {
        var html = handlebarsCompile(project);
        $('#projects').append(html);
      });
    });
    Project.all = [];
  };

  //creates a DB table for the projects
  Project.createTable = function(callback) {
    webDB.execute(
      'CREATE TABLE IF NOT EXISTS projects (' +
        'id INTEGER PRIMARY KEY, ' +
        'title VARCHAR(50) NOT NULL, ' +
        'author VARCHAR(50), ' +
        'projectURL VARCHAR(200), ' +
        'publishedOn DATETIME NOT NULL, ' +
        'category VARCHAR(20), ' +
        'body TEXT NOT NULL, ' +
        'imgURL VARCHAR(50));',
        function(result) {
          if(callback) callback();
        }
    );
  };

  //deletes all the projects in the db table
  Project.truncateTable = function(callback) {
    webDB.execute(
    'DELETE FROM projects;',
    callback
    );
  };

  //inserts a project into the db table
  Project.prototype.insertProject = function(callback) {
    webDB.execute(
      [
        {
          'sql': 'INSERT INTO projects (title, author, projectURL, publishedOn, category, body, imgURL) VALUES(?, ?, ?, ?, ?, ?, ?);',
          'data': [this.title, this.author, this.projectURL, this.publishedOn, this.category, this.body, this.imgURL]
        }
      ],
      callback
    );
  };

  //deletes a project from the db table
  Project.prototype.deleteProject = function(callback) {
    webDB.execute(
      [
        {
          'sql': 'DELETE FROM projects WHERE id = ?',
          'data': [this.id]
        }
      ],
      callback
    );
  };

  //updates an project in the db table; overwrites the corresponding info in the db
  Project.prototype.updateProject = function(callback) {
    webDB.execute(
      [
        {
          'sql': 'UPDATE projects SET (title, author, projectURL, publishedOn, category, body) VALUES(?, ?, ?, ?, ?, ?);',
          'data': [this.title, this.author, this.projectURL, this.publishedOn, this.category, this.body]
        }
      ],
      callback
    );
  };

  //Retrieves project data with ajax call if nothing is in the database table, if there is data in the table it is taken out and loaded to the index page
  Project.fetchAll = function(callback) {
    $.getJSON('data/projects.json', function(projectData) {
      projectData.forEach(function(item) {
        var project = new Project(item);
        Project.all.push(project);
      });
      Project.loadAll();
    });
  };
  module.Project = Project;

})(window);
