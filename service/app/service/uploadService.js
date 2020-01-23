'use strict';

const Service = require('egg').Service;
const path = require('path');
const fs = require('fs');
const awaitWriteStream = require('await-stream-ready').write;
const sendToWormhole = require('stream-wormhole');
const common = require('../common/common');
const { dirExists } = common;

class uploadService extends Service {
  async upload(stream) {
    // 生成文件名
    const filename = Date.now() + '' + Number.parseInt(Math.random() * 10000) + path.extname(stream.filename);
    // 写入路径
    await dirExists(path.join(this.config.baseDir, 'app/public/upload/'));
    const target = path.join(this.config.baseDir, 'app/public/upload/', filename);
    const writeStream = fs.createWriteStream(target);
    try {
    // 写入文件
      const { ctx } = this;
      // console.log(ctx.user);
      const { id } = ctx.user;
      await awaitWriteStream(stream.pipe(writeStream));
      const avatarUrl = '/public/upload/' + filename;
      const updateAvatarSql = "UPDATE `user` SET `avatar` = '" + avatarUrl + "' WHERE id =" + id;
      const result = await this.app.mysql.query(updateAvatarSql);
      const updateSuccess = result.affectedRows === 1;
      if (updateSuccess) {
        return {
          code: 1,
          url: avatarUrl,
        };
      }
      return {
        code: 0,
        msg: '服务端写入文件异常',
      };
    } catch (err) {
    // 必须将上传的文件流消费掉，要不然浏览器响应会卡死
      await sendToWormhole(stream);
      return {
        code: 0,
        msg: '服务端写入文件异常',
      };
    }
  }

}


module.exports = uploadService;
