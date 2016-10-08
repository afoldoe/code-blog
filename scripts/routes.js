//defines routes for each li in the nav

page('/projects', projectController.index);
page('/about', aboutController.index);
page('/skills', skillsController.index);
page('/contact', contactController.index);
page('/', homeController.index);
page();
