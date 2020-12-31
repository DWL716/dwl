const { promisify } = require("util");
const path = require("path");

// 使用 promisify ，使该方法返回一个 promise 函数
const download = promisify(require("download-git-repo"));
// const open = require("open");

const { vueRepo } = require("../config/repo-config");
const { commandSpawn } = require("../utils/terminal");
const { ejsCompile, mkdirSync, writeFile } = require("../utils/file");

const createProjectAction = async (project) => {
  console.log(project);
  // 1. clone 项目
  await download(vueRepo, project, { clone: true });
  // 2. 执行 npm install
  const npm = process.platform === "win32" ? "npm.cmd" : "npm";
  await commandSpawn(npm, ["install"], { cwd: `./${project}` });
  // 3. 运行 npm run 命令
  await commandSpawn(npm, ["run", "serve"], { cwd: `./${project}` });
  // 4. 打开浏览器
  // open("http://localhost:8080:");
};

const handleEjsToFile = async (name, desc, template, filename) => {
  // 1.获取模块引擎的路径
  const templatePath = path.resolve(__dirname, template);
  const result = await ejsCompile(templatePath, {
    name,
    lowerName: name.toLowerCase(),
  });
  // 2.写入文件中
  // 判断文件不存在,那么就创建文件
  mkdirSync(desc);
  // const targetPath = path.resolve(desc, filename);
  // writeFile(targetPath, result);
};

// cpn 模版
const addComponent = async (name, desc) => {
  console.log(name, desc, 'path入口');
  handleEjsToFile(name, desc, "../template/component.vue.ejs", `${name}.vue`);
};

module.exports = {
  createProjectAction,
  addComponent,
};
