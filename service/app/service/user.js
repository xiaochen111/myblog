'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async login({ username, password }) {
    const userList = await this.app.mysql.select('user', {
      where: { username, password },
      columns: [ 'username', 'id', 'password' ],
    });
    if (Array.isArray(userList) && userList.length > 0) {
      return {
        code: 1,
        user: userList[0],
      };
    }
    return { code: 0 };
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
        const { id, username } = userList[0];
        return {
          code: 1,
          user: { id, username },
        };
      }
    }
    return { code: 0 };
  }
}


module.exports = UserService;
