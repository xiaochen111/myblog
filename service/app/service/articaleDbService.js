'use strict';

const Service = require('egg').Service;

class ArticleDbService extends Service {
  async writeArtcleDb({ title, content, userId, typeId }) {
    const result = await this.app.mysql.insert('article', { title, createTime: new Date(), content, userId, typeId });
    result.code = result.affectedRows === 1 ? 1 : 0;
    return result;
  }


  // 操作数据库的service
  async getDatabaseList({ id }) {
    const sqlCondition = id ? `where art.typeId = ${id}` : '';
    const sql = `SELECT 
      art.title,
      DATE_FORMAT(art.createTime,'%Y-%m-%d %H:%i:%s') createTime,
      art.id,
      type.name
      FROM article as art
      left join 
      type on art.typeId = type.id 
      ${sqlCondition}
      order by createTime DESC`;
    const article = await this.app.mysql.query(sql);
    return article;
  }

  async getDbDetail(id) {
    const updataSql = `UPDATE article SET readNum = (readNum+1) where id = ${id}`;
    const result = await this.app.mysql.query(updataSql);
    const updateSuccess = result.affectedRows === 1;
    if (updateSuccess) {
      const sql = `SELECT 
        art.id,
        art.title,
        DATE_FORMAT(art.createTime,'%Y-%m-%d %H:%i:%s') as time,
        art.content,
        art.readNum,
        user.username,
        type.name as type,
        art.typeId
        FROM article AS art 
        INNER JOIN 
        user ON art.userId = user.id 
        INNER JOIN
        type on art.typeId = type.id
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

  async eidtArticle(articleVo) {
    const { title, content, userId, typeId, id } = articleVo;
    const updataSql = `UPDATE article SET 
      title = '${title}',
      createTime = NOW(),
      content='${content}',
      userId=${userId},
      typeId=${typeId}
      where id = ${id}`;
    const result = await this.app.mysql.query(updataSql);
    const updateSuccess = result.affectedRows === 1;
    if (updateSuccess) {
      return {
        code: 1,
      };
    }
    return {
      code: 0,
    };
  }

  // 获取类型的list
  async getTypeList() {
    const res = await this.app.mysql.select('type');
    return res;
  }
}

module.exports = ArticleDbService;
