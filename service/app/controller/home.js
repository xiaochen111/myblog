'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async list() {
    const { ctx } = this;
    const res = await ctx.service.getArticleSerice.getList();
    ctx.body = res;
  }
  async getMdContent() {
    const { ctx } = this;
    const { fileName } = ctx.request.body;
    const res = await ctx.service.getArticleSerice.getDemoMd(fileName);
    ctx.body = res;
  }

  async writeArt() {
    const { ctx } = this;
    const { title, value } = ctx.request.body;
    const res = await ctx.service.getArticleSerice.writeArtcle(title, value);
    ctx.body = { code: res };
  }

  // 与数据库交互-----------------------------------------------------------------------------------
  async getDbArt() {
    const { ctx } = this;
    const res = await ctx.service.articaleDbService.getDatabaseList();
    ctx.body = res;
  }
  async getDbDetail() {
    const { ctx } = this;
    const { id } = ctx.request.body;
    const res = await ctx.service.articaleDbService.getDbDetail(id);
    ctx.body = res;
  }

  async writeArtcleDb() {
    const { ctx } = this;
    const { title, value, userId } = ctx.request.body;
    const res = await ctx.service.articaleDbService.writeArtcleDb(title, value, userId);
    ctx.body = res;
  }


  async getUserInfo() {
    const { ctx } = this;
    const res = await ctx.service.user.getUserInfo();
    if (res.code === 1) {
      ctx.body = res;
    } else {
      ctx.status = 401;
      ctx.body = res;
    }
  }

  async login() {
    const { ctx } = this;
    const { username, password } = ctx.request.body;
    const res = await ctx.service.user.login({ username, password });
    const { code, user } = res;
    if (code === 1) {
      ctx.cookies.set('username', user.username, {
        encrypt: true, // 加密传输
      });
      ctx.cookies.set('password', user.password, {
        encrypt: true, // 加密传输
      });
      ctx.session[user.username] = true;
      ctx.session.maxAge = 10 * 60 * 1000; // session设置一个小时的过期时间
      ctx.body = { code, user: { id: user.id, username: user.username } };
    } else {
      ctx.body = { code };
    }
  }
}


module.exports = HomeController;
