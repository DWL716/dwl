const path = require("path");
const fs = require("fs");
const ejs = require('ejs');

const ejsCompile = (templatePath, data = {}, options = {}) => {
  return new Promise((resolve, reject) => {
    ejs.renderFile(templatePath, { data }, options, (err, str) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(str);
    });
  });
};

// 递归创建 文件夹
const mkdirSync = (dirname) => {
  console.log(dirname);
  if(fs.existsSync(dirname)){
    return true
  }else {
    // 不存在,判断父亲文件夹是否存在？
    if(mkdirSync(path.dirname(dirname))) {
      // 存在父亲文件，就直接新建该文件
      fs.mkdirSync(dirname)
      return true
    }
  }
}

// 通过模版文件创建对应的文件
const writeFile = (path, context) => {
  if(fs.existsSync(path)) {
    log.error("已经存在该文件，请重新创建~")
    return
  }
  return fs.promises.writeFile(path, context)
}

module.exports = {
  ejsCompile,
  mkdirSync,
  writeFile
};
