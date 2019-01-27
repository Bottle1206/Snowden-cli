module.exports = function() {
  console.log('----------------\n')
  console.log('[webpack]:')
  console.log('      <vue单页面应用>包括 vue, vuex, vue-router, vue-resource, element-ui, stylus, eslint\n')
  console.log('[webpack-simple]:')
  console.log('      仅包括 vue, vuex, stylus, eslint\n');
  console.log('[webpack-multi]:')
  console.log('      <vue多页面项目> 包括 vue, vuex, element-ui, stylus, eslint')
  process.exit()
}