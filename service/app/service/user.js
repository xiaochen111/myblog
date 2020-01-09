'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async find() {
    // const user = await this.app.mysql.get('o_web_user', { id: '74078887616847872' });
    // console.log(user);
    // return user;
  }
}

module.exports = UserService;
