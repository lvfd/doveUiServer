// lvfd@acca.com.cn
// 20220806
const path = require('path')
module.exports = {
  // path.resolve() is always pointing at what the file(paths.js) has used it!
  uikit: path.resolve(__dirname, '../','uikit'),
  webpack: path.resolve(__dirname, '../','doveUiServer'),
}