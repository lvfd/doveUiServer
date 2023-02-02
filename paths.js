// lvfd@acca.com.cn
// 20220806
// 配置各项目folder的路径


const path = require('path')
const root = __dirname

// path.resolve() is always pointing at what the file(paths.js) has used it!
let paths = {
  uikit: path.resolve(root, '../','uikit'),
  uikitV2: path.resolve(root, '../','uikit.v2'),
  webpack: path.resolve(root, '../','doveUtils', 'dist'),
  plugin: path.resolve(root, '../', 'doveUtils', 'plugin'),
  test: path.resolve(root, '../', 'doveUtils', 'test'),
}

paths.uikit_pro = path.resolve(paths.uikit, 'dist')
paths.uikitV2_dist = path.resolve(paths.uikitV2, 'dist')

module.exports = paths