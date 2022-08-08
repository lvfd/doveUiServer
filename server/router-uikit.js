// lvfd@acca.com.cn
// 20220806


const express = require('express')
const uikit = express.Router()
const paths = require('../paths')

const utilsExpress = require('../utils').express
const env = utilsExpress.getNodeEnv
const publicSend = utilsExpress.publicSend

if (env.pro) {  // 生产环境
    uikit.use('/dist', express.static(paths.uikit_pro))
    uikit.get('/', publicSend.root)
} else {    // 开发环境
    uikit.use(express.static(paths.uikit))
    uikit.get('/', (req, res) => { res.redirect('tests') })
}


module.exports = uikit