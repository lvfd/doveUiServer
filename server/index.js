// lvfd@acca.com.cn
// 20220806
// version 2: 230201

const path = require('path')
const express = require('express')
const app = express()
const port = 3013
const env = process.env.NODE_ENV? process.env.NODE_ENV: 'production'
const doveroot = env === 'production'? 'node_modules/@lyufudi': '../'

app.locals.title = 'Dove UI Server'
app.locals.startTime = new Date()
app.disable('x-powered-by')

// for uikit (version 1):
app.use('/doveuikit', require('./router-uikit'))

// for webpack (version 1): 
// app.use('/doveutils', require('./router-webpack'))

// version 2:
app.use('/doveutils/dovepay', express.static(path.resolve(process.cwd(), doveroot, 'dovepay-ui/dist')))


// Running log:
app.listen(port, () => {
  console.log('----------App Started----------')
  // console.log(`__dirname = ${__dirname}`)
  // console.log(`process.cwd() = ${process.cwd()}`)
  console.log(`环境变量NODE_ENV = ${process.env.NODE_ENV}`)
  console.log(`端口PORT = ${port}`)
})