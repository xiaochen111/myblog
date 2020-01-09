'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async list() {
    const { ctx } = this;
    // const user = await ctx.service.user.find();
    const res = await ctx.service.getArticleSerice.getList();
    ctx.body = res;
  }
  async getMdContent() {
    const { ctx } = this;
    const { fileName } = ctx.request.body;
    const res = await ctx.service.getArticleSerice.getDemoMd(fileName);
    ctx.body = res;
  }
}


module.exports = HomeController;
