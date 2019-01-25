# Snowden-cli
## vue自动构建工具，支持webpack，webpack-simple, webpack-multi 三个模板

git clone https://github.com/jrainlau/scion.git

cd Snowden-cli && npm install

npm link

### 创建项目 ###
snowden init [template] [projectName]

### template可选项 ###
webpack: 包括 vue, vuex, vue-router, vue-resource, element-ui, stylus, eslint

webpack-simple: 仅包括 vue, vuex, stylus, eslint

webpack-multi: <vue多页面项目> 包括 vue, vuex, element-ui, stylus, eslint