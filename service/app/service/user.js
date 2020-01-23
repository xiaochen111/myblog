'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async login({ username, password }) {
    const user = await this.app.mysql.select('user', {
      where: { username },
    });
    if (!user.length) {
      return {
        code: 0,
        message: '没有该用户名！',
      };
    }
    const userList = await this.app.mysql.select('user', {
      where: { username, password },
      columns: [ 'username', 'id', 'password', 'avatar' ],
    });
    if (Array.isArray(userList) && userList.length > 0) {
      return {
        code: 1,
        user: userList[0],
      };
    }
    return { code: 0, message: '用户名或密码不正确！' };
  }

  async getUserInfo() {
    const { ctx } = this;
    const username = ctx.cookies.get('username', {
      encrypt: true,
    });
    const password = ctx.cookies.get('password', {
      encrypt: true,
    });
    if (username && password) {
      const userList = await this.app.mysql.select('user', {
        where: { username, password },
      });
      if (Array.isArray(userList) && userList.length > 0) {
        const { id, username, avatar } = userList[0];
        return {
          code: 1,
          user: { id, username, avatar },
        };
      }
    }
    return { code: 0 };
  }
}


module.exports = UserService;
