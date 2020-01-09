'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/blog/list', controller.home.list);
  router.post('/blog/md', controller.home.getMdContent);
  router.post('/blog/dbArt', controller.home.getDbArt);
  router.post('/blog/writeArt', controller.home.writeArt);
};
