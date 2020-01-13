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
  async getDbArt() {
    const { ctx } = this;
    const res = await ctx.service.getArticleSerice.getDatabaseList();
    ctx.body = res;
  }

  async writeArtcleDb() {
    const { ctx } = this;
    const { title, value } = ctx.request.body;
    const res = await ctx.service.getArticleSerice.writeArtcleDb(title, value);
    ctx.body = res;
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
      ctx.session[user.username] = true;
    }
    ctx.body = { code, user };
  }
}


module.exports = HomeController;
