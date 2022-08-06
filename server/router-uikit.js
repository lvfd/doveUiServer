// lvfd@acca.com.cn
// 20220806
const express = require('express')
const uikit = express.Router()
const paths = require('../paths')

// console.log(paths.uikit) // : Test path
uikit.use(express.static(paths.uikit))
uikit.get('/', (req, res) => {
    res.redirect('tests')
})

module.exports = uikit