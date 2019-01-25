const { prompt }  = require('inquirer');

module.exports = function(template, projectName) {
  const questions = [{
    type: 'input',
    name: 'projectName',
    message: '请输入项目名称',
    validate(val) {
      if (val) return true;
      return "项目名不能为空！"
    },
    default: projectName
  }, {
    type: 'list',
    name: 'template',
    message: '请选择模板',
    choices: [
      'webpack',
      'webpack-simple',
      'webpack-multi'
    ],
    default: template || 'webpack'
  }, {
    type: 'input',
    name: 'author',
    message: '请输入开发者',
    default: ''
  }, {
    type: 'input',
    name: 'description',
    message: '请输入项目描述',
    default: `a Vue project.`
  }];
  return prompt(questions)
}