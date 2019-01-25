const chalk = require('chalk')
const download = require('download-git-repo')
var formatJson = require('format-json');
const ora = require('ora')
const fs = require('fs');

const templateLib = require('../gittemplate.json');
const userInput = require('./userInput');
const setPackage = require('./setPackage');

module.exports = function(template, projectName) {
  userInput(template, projectName).then(answers => {
    const gitPlace = templateLib[template].url;
    const dist = process.cwd() + '/' + answers.projectName;

    const spinner = ora('正在下载模板...').start();
    download(`direct:${gitPlace}`, dist, { clone: true }, (err) => {
      if (err) {
        console.log(chalk.red(`\n ${err}`))
        process.exit()
      }
      spinner.succeed('模板下载完成');
      setPackage(dist, answers, () => {
        if (err) {
          console.log(chalk.red(`\n ${err}`))
          process.exit()
        }
        console.log(chalk.green('-----项目构建成功!-----'));
        showExtendIfm()
      })
    })
  })
}


function showExtendIfm(projectName) {
    console.log('--------------------------------------------');
    console.log('\n   install dependencies:');
    console.log('     cd ' + projectName + ' && npm install\n');
    console.log('   run the app:');
    console.log('     npm run dev\n');
    console.log('   build the app:');
    console.log('     npm run build\n');
    console.log('--------------------------------------------');
  };