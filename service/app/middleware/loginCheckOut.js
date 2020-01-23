'use strict';

module.exports = () => {
  return async function loginCheckOut(ctx, next) {
    const name = ctx.cookies.get('username', {
      encrypt: true,
    });
    // console.log(name, ctx.session.maxAge);
    // console.log(ctx.session[name]);
    if (name && ctx.session[name]) {
      ctx.user = ctx.session[name].user;
      await next();
    } else {
      ctx.status = 401;
      ctx.body = {
        code: 0,
        message: '重新登录',
      };
    }
  };
};

