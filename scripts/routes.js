page('/projects', projectController.index);
page('/about', aboutController.index);
page('/skills', skillsController.index);
page('/contact', contactController.index);
page('/', homeController.index);
// page('*', function(ctx) {
  // if(ctx.init) {
    // next();
  // } else {
//   
// }
// });
page();
