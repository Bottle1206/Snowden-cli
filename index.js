#!/usr/bin/env node --harmony
'use strict'
 // 定义脚手架的文件路径
process.env.NODE_PATH = __dirname + '/node_modules/';

const { resolve } = require('path')
const program = require('commander')

const res = command => resolve(__dirname + '/commands/' + command)
 
 // 定义当前版本
program
    .version(require('./package').version )
 
// 定义使用方法
program
    .usage('<command> [options]')

program
    .command('init [template] [projectName]')
    .description('Generate a new vue project')
    .alias('i')
    .action((template, projectName) => {
      require(res('init'))(template, projectName)
    })
 
program
    .command('list')
    .description('List all the templates')
    .alias('l')
    .action(() => {
        require(res('list'))()
    })
 

program.parse(process.argv)
 
if(!program.args.length){
  console.log('\n*************************************\n');
  console.log('* author: qiyu / bottle\n');
  console.log('* email: bottle1206@outlook.com\n');
  console.log('\n*************************************\n');
}