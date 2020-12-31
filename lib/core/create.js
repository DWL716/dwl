const program = require('commander');

const {
  createProjectAction,
  addComponent
} = require('./action');

// 创建项目指令
const createCommander = () => {
  // 初始化一个模版 vue or ～
  program
    .command('create <project> [others...]')
    .description('创建一个模版')
    .action(createProjectAction)
  
  // 创建 page 模版
  program
    .command('addcpn <name>')
    .description('add vue component, 例如：dwl addcpn NavBar [-d src/components]')
    .action(name => addComponent(name, program.dest || 'src/components'))
  // 创建 router 模版
}

module.exports = createCommander