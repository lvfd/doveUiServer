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
    uikit.use('/v2', express.static(paths.uikitV2_dist))
} else {    // 开发环境
    uikit.use(express.static(paths.uikit))
    uikit.get('/', (req, res) => { res.redirect('tests') })
    uikit.use('/v2', express.static(paths.uikitV2_dist))
}


module.exports = uikit