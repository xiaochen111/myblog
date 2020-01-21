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
      // 查询详情
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
      // 查询详情的评论
      const commentSql = `SELECT comment, 
        DATE_FORMAT(time,'%Y-%m-%d %H:%i:%s') as time,
        user.username as commentUser 
        from comments 
        INNER JOIN 
        user on comments.commentUserId = user.id  
        WHERE articaleId = ${id}
        order by time DESC`;
      const articleComment = await this.app.mysql.query(commentSql);
      if (article && article.length > 0) {
        article[0].list = articleComment;
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

  async writeComment(commentVo) {
    const { comment, articaleId, commentUserId } = commentVo;
    const result = await this.app.mysql.insert('comments', {
      comment,
      articaleId,
      commentUserId,
      time: new Date(),
    });
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
