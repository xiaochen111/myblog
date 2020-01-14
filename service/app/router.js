'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const loginCheckOut = app.middleware.loginCheckOut();
  router.get('/', controller.home.index);
  router.post('/blog/list', loginCheckOut, controller.home.list);
  router.post('/blog/md', controller.home.getMdContent);
  router.post('/blog/dbArt', controller.home.getDbArt);
  router.post('/blog/writeArt', loginCheckOut, controller.home.writeArt);
  router.post('/blog/writeArtcleDb', loginCheckOut, controller.home.writeArtcleDb);
  router.post('/blog/login', controller.home.login);
  router.post('/blog/getDbDetail', controller.home.getDbDetail);
  router.post('/blog/getUserInfo', controller.home.getUserInfo);
};
