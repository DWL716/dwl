const program = require('commander');

const {createProjectAction} = require('./action');

// 创建脚手架
const createCommander = () => {
  program
    .command('create <project> [others...]')
    .description('创建一个模版')
    .action(createProjectAction)
}
// 创建 page 模版
// 创建 router 模版

module.exports = createCommander