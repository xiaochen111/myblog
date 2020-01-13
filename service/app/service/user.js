'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async login({ username, password }) {
    const user = await this.app.mysql.select('user', { username, password });
    console.log(typeof user);
    return user;
  }
}

module.exports = UserService;
