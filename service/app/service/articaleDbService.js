'use strict';

const Service = require('egg').Service;

class ArticleDbService extends Service {
  async writeArtcleDb(title, buffer, userId) {
    const result = await this.app.mysql.insert('article', { title, createTime: new Date(), content: buffer, userId });
    result.code = result.affectedRows === 1 ? 1 : 0;
    return result;
  }


  // 操作数据库的service
  async getDatabaseList() {
    const sql = `SELECT 
    art.title,DATE_FORMAT(art.createTime,'%Y-%m-%d %H:%i:%s') createTime,art.content,art.id
    FROM article as art order by id desc`;
    const article = await this.app.mysql.query(sql);
    return article;
  }

  async getDbDetail(id) {
    const updataSql = `UPDATE article SET readNum = (readNum+1) where id = ${id}`;
    const result = await this.app.mysql.query(updataSql);
    const updateSuccess = result.affectedRows === 1;
    if (updateSuccess) {
      const sql = `SELECT 
        art.title,DATE_FORMAT(art.createTime,'%Y-%m-%d %H:%i:%s') as time,art.content,art.readNum,user.username
        FROM article AS art 
        INNER JOIN 
        user ON art.userId = user.id 
        WHERE art.id = ${id}`;
      const article = await this.app.mysql.query(sql);
      if (article && article.length > 0) {
        return {
          art: article,
          code: 1,
        };
      }
    }
    return {
      code: 0,
    };
  }
}

module.exports = ArticleDbService;
