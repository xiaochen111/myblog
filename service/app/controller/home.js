'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.redirect('/index.html');
  }
  async list() {
    const { ctx } = this;
    const res = await ctx.service.getArticleService.getList();
    ctx.body = res;
  }
  async getMdContent() {
    const { ctx } = this;
    const { fileName } = ctx.request.body;
    const res = await ctx.service.getArticleService.getDemoMd(fileName);
    ctx.body = res;
  }

  async writeArt() {
    const { ctx } = this;
    const { title, value } = ctx.request.body;
    const res = await ctx.service.getArticleService.writeArtcle(title, value);
    ctx.body = { code: res };
  }

  async visitNum() {
    const { ctx } = this;
    const res = await ctx.service.getArticleService.visitNum();
    ctx.body = { visitNum: res };
  }

  // 与数据库交互-----------------------------------------------------------------------------------
  async getDbArt() {
    const { ctx } = this;
    const { id } = ctx.request.body;
    const res = await ctx.service.articaleDbService.getDatabaseList({ id });
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
    const params = ctx.request.body;
    const res = await ctx.service.articaleDbService.writeArtcleDb(params);
    ctx.body = res;
  }

  async getTypeList() {
    const { ctx } = this;
    const res = await ctx.service.articaleDbService.getTypeList();
    ctx.body = res;
  }

  async eidtArticle() {
    const { ctx } = this;
    const params = ctx.request.body;
    const res = await ctx.service.articaleDbService.eidtArticle(params);
    ctx.body = res;
  }

  async writeComment() {
    const { ctx } = this;
    const params = ctx.request.body;
    const res = await ctx.service.articaleDbService.writeComment(params);
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
    const { code, user, message } = res;
    if (code === 1) {
      ctx.cookies.set('username', user.username, {
        encrypt: true, // 加密传输
      });
      ctx.cookies.set('password', user.password, {
        encrypt: true, // 加密传输
      });
      ctx.session[user.username] = { user };
      ctx.session.maxAge = 30 * 60 * 1000; // session设置一个小时的过期时间
      ctx.body = { code, user: { id: user.id, username: user.username } };
    } else {
      ctx.body = { code, message };
    }
  }

  async upload() {
    const { ctx } = this;
    const stream = await ctx.getFileStream();
    const res = await ctx.service.uploadService.upload(stream);
    ctx.body = res;
  }

}


module.exports = HomeController;
