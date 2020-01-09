'use strict';

const Service = require('egg').Service;
const path = require('path');

const common = require('../common/common');
const { readFile, readFileList } = common;

class ArticleService extends Service {
  async getList() {
    // const articlePath = path.join(__dirname, '../static/json/articleList.json');
    const listMd = path.join(__dirname, '../static/markdown/');
    const result = await readFileList(listMd);
    const arr = result.split(',');
    return arr;
  }
  async getDemoMd(fileName) {
    const demoMdPath = path.join(__dirname, `../static/markdown/${fileName}`);
    const result = await readFile(demoMdPath);
    return result;
  }
}


module.exports = ArticleService;
