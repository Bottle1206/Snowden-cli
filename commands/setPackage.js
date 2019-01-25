var formatJson = require('format-json');
const ora = require('ora')
const fs = require('fs');

module.exports = function(path, answers, cb) {
  const spinner = ora('正在初始化配置...').start();
  const pkgPath = path + '/package.json';
  fs.readFile(pkgPath, (err, buffer) => {
    if (err) {
      console.log(chalk.red(`\n ${err}`))
      process.exit()
    }
    var jsonData = JSON.parse(buffer.toString());
    jsonData.name = answers.projectName;
    jsonData.author = answers.author;
    jsonData.description = answers.description;
    fs.writeFile(pkgPath, formatJson.plain(jsonData), function(error) {
      if (error) {
        spinner.fail('初始化配置失败');
        process.exit();
        cb(error);
      } else {
        spinner.succeed('初始化配置成功');
        cb();
      }
    });   
  })
}