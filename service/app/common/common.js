'use strict';

const fs = require('fs');
const path = require('path');
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

async function readFileList(filePath) {
  return new Promise((resolve, reject) => {
    fs.readdir(filePath, (err, content) => {
      // 读取错误则调用 reject
      if (err) return reject(err);
      // 读取成功则调用 resolve
      return resolve(content.toString());
    });
  });
}

async function writeFile(filePath, buffer) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, buffer, err => {
      // 读取错误则调用 reject
      if (err) return reject(err);
      // 读取成功则调用 resolve
      return resolve('1');
    });
  });
}


/**
 * 读取路径信息
 * @param {string} path 路径
 */
function getStat(path) {
  return new Promise(resolve => {
    fs.stat(path, (err, stats) => {
      if (err) {
        resolve(false);
      } else {
        resolve(stats);
      }
    });
  });
}

/**
* 创建路径
* @param {string} dir 路径
*/
function mkdir(dir) {
  return new Promise(resolve => {
    fs.mkdir(dir, err => {
      if (err) {
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });
}

/**
* 路径是否存在，不存在则创建
* @param {string} dir 路径
*/
async function dirExists(dir) {
  const isExists = await getStat(dir);
  // 如果该路径且不是文件，返回true
  if (isExists && isExists.isDirectory()) {
    return true;
  } else if (isExists) {
    return false;
  }
  const tempDir = path.parse(dir).dir;
  const status = await dirExists(tempDir);
  let mkdirStatus;
  if (status) {
    mkdirStatus = await mkdir(dir);
  }
  return mkdirStatus;
}

module.exports = { readFile, readFileList, writeFile, dirExists };

