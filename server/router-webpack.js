// lvfd@acca.com.cn
// 20220807


const express = require('express')
const paths = require('../paths')

const utilsExpress = require('../utils').express
const env = utilsExpress.getNodeEnv
const publicSend = utilsExpress.publicSend

const webpack = express.Router()

webpack.use(express.static(paths.webpack))

module.exports = webpack