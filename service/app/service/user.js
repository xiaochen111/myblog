'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async login({ username, password }) {
    const userList = await this.app.mysql.select('user', {
      where: { username, password },
      columns: [ 'username' ],
    });
    if (Array.isArray(userList) && userList.length > 0) {
      return {
        code: 1,
        user: userList[0],
      };
    }
    return { code: 0 };
  }
}

module.exports = UserService;
