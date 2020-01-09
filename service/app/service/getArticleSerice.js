'use strict';

const Service = require('egg').Service;

const readFile = require('../common/common');
const path = require('path');

class ArticleService extends Service {
  async getList() {
    const articlePath = path.join(__dirname, '../static/json/articleList.json');
    const result = await readFile(articlePath);
    return result;
  }
  async getDemoMd() {
    const demoMdPath = path.join(__dirname, '../static/markdown/demo.md');
    const result = await readFile(demoMdPath);
    return result;
  }
}


module.exports = ArticleService;
