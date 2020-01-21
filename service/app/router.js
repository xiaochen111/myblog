'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const loginCheckOut = app.middleware.loginCheckOut();
  router.get('/', controller.home.index);
  router.post('/blog/list', loginCheckOut, controller.home.list);
  router.post('/blog/md', loginCheckOut, controller.home.getMdContent);
  router.post('/blog/visitNum', controller.home.visitNum);
  router.post('/blog/dbArt', loginCheckOut, controller.home.getDbArt);
  router.post('/blog/writeArt', loginCheckOut, controller.home.writeArt);
  router.post('/blog/writeArtcleDb', loginCheckOut, controller.home.writeArtcleDb);
  router.post('/blog/login', controller.home.login);
  router.post('/blog/getDbDetail', loginCheckOut, controller.home.getDbDetail);
  router.post('/blog/getUserInfo', loginCheckOut, controller.home.getUserInfo);
  router.post('/blog/getTypeList', loginCheckOut, controller.home.getTypeList);
  router.post('/blog/eidtArticle', loginCheckOut, controller.home.eidtArticle);
  router.post('/blog/writeComment', loginCheckOut, controller.home.writeComment);
};
