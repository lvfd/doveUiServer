// lvfd@acca.com.cn
// 20220806


const express = require('express')
const app = express()
const port = 3013

app.locals.title = 'Dove UI Server'
app.locals.startTime = new Date()


// for uikit:
app.use('/doveuikit', require('./router-uikit'))

// for webpack:
// app.use('/doveutils', webpack)


// Running log:
app.listen(port, () => {
  console.log('----------App Started----------')
  console.log(`__dirname = ${__dirname}`)
  console.log(`process.cwd() = ${process.cwd()}`)
  console.log(`环境变量NODE_ENV = ${process.env.NODE_ENV}`)
  console.log(`端口PORT = ${port}`)
})