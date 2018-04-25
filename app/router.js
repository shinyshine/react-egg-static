
module.exports = app => {

  const { router, controller } = app;
  
  app.get('/index', app.controller.student.index.page);
  app.get('/login', app.controller.login.login.page);
  app.get('/class(/.+)?', app.controller.teacher.course.renderClassPage);
  app.get('/teacher', app.controller.teacher.index.page);
  app.get('/course(/.+)?', app.controller.teacher.course.page)
  app.get('/edit', app.controller.teacher.notice.page)
  app.get('/modify/:id', app.controller.teacher.modify.page)
  app.get('/add', app.controller.teacher.addCourse.page)
  app.get('/incourse(/.+)?', app.controller.student.course.page)
  app.get('/search', app.controller.search.page)

  app.get('/account', app.controller.account.page)
  app.get('/info', app.controller.account.info)
  app.get('/upload', app.controller.upload.page)

  // app.get('/mobile/notice', app.controller.mobile.notice);




  // restful api

  router.get('/api/getStuListByid', controller.teacher.homework.getStuListByid);
};
