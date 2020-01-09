'use strict';

const fs = require('fs');
// 把 fs.readFile 封装为 Promise 方式
async function readFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, content) => {
      // 读取错误则调用 reject
      if (err) return reject(err);
      // 读取成功则调用 resolve
      return resolve(content.toString());
    });
  });
}

module.exports = readFile;
