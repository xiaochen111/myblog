'use strict';

module.exports = () => {
  return async function loginCheckOut(ctx, next) {
    const name = ctx.cookies.get('username', {
      encrypt: true,
    });
    console.log(name);
    if (name && ctx.session[name]) {
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

