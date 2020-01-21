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

  async writeArtcle(fileName, buffer) {
    const writePath = path.join(__dirname, `../static/markdown/${fileName}.md`);
    const result = await writeFile(writePath, buffer);
    return result;
  }

  async visitNum() {
    const filePath = path.join(__dirname, '../static/visitNum.txt');
    const visitNum = await readFile(filePath);
    await writeFile(filePath, visitNum * 1 + 1);
    const visitNumNew = await readFile(filePath);
    return visitNumNew;
  }


}


module.exports = ArticleService;
