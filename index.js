#!/usr/bin/env node
const program = require("commander");

const helpOption = require('./lib/core/help')
const createCommander = require('./lib/core/create')

// 查看版本号
program.version(require("./package.json").version);
// 帮助和可选参数
helpOption()
// 创建 模版
createCommander()

program.parse(process.argv);
