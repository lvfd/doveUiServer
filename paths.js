// lvfd@acca.com.cn
// 20220806
// 配置各项目folder的路径


const path = require('path')
const root = __dirname

// path.resolve() is always pointing at what the file(paths.js) has used it!
let paths = {
  uikit: path.resolve(root, '../','uikit'),
  webpack: path.resolve(root, '../','doveUtils', 'dist'),
  plugin: path.resolve(root, '../', 'doveUtils', 'plugin'),
}

paths.uikit_pro = path.resolve(paths.uikit, 'dist')

module.exports = paths