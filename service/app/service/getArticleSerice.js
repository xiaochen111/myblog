'use strict';

const Service = require('egg').Service;
const path = require('path');

const common = require('../common/common');
const { readFile, readFileList, writeFile } = common;

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

  async writeArtcleDb(title, buffer) {
    const result = await this.app.mysql.insert('article', { title, createTime: new Date(), content: buffer });
    result.code = result.affectedRows === 1 ? 1 : 0;
    return result;
  }

  async writeArtcle(fileName, buffer) {
    const writePath = path.join(__dirname, `../static/markdown/${fileName}.md`);
    const result = await writeFile(writePath, buffer);
    return result;
  }

  // 操作数据库的service
  async getDatabaseList() {
    const article = await this.app.mysql.select('article', {
      columns: [ 'id', 'title', 'createTime' ],
    });
    return article;
  }

}


module.exports = ArticleService;
