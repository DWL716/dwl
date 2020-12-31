// 执行终端相关命令

const { spawn } = require("child_process");

commandSpawn = (...args) => {
  // const [command, args, options] = args
  return new Promise((resole, reject) => {
    // spawn 开启子进程
    const childProcess = spawn(...args);
    childProcess.stdout.pipe(process.stdout);
    childProcess.stderr.pipe(process.stderr);
    childProcess.on('close', () => {
      console.log('执行完毕--');
      resole();
    })
  })
}


module.exports = {
  commandSpawn
}