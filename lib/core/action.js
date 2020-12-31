const { promisify } = require("util");

// 使用 promisify ，使该方法返回一个 promise 函数
const download = promisify(require("download-git-repo"));
const open = require("open");

const { vueRepo } = require("../config/repo-config");
const { commandSpawn } = require("../utils/terminal");

const createProjectAction = async (project) => {
  console.log(project);
  // 1. clone 项目
  await download(vueRepo, project, { clone: true });
  // 2. 执行 npm install
  const npm = process.platform === "win32" ? "npm.cmd" : "npm";
  await commandSpawn(npm, ["install"], { cwd: `./${project}` });
  // 3. 运行 npm run 命令
  await commandSpawn(npm, ['run', 'serve'], { cwd: `./${project}` });
  // 4. 打开浏览器
  // open("http://localhost:8080:");
};

module.exports = {
  createProjectAction,
};
