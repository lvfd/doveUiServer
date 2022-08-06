// lvfd@acca.com.cn
// 20220806
const express = require('express')
const app = express()
const port = 3013

console.log(`NODE_ENV = ${app.get('env')}`)

// for uikit:
app.use('/doveuikit', require('./router-uikit'))
// console.log(`NODE_ENV = ${app.get('env')}`)
// for webpack:
// app.use('/doveutils', webpack)



// Running log:
app.listen(port, () => {
  console.log(`DOVE_UI_SERVER on PORT ${port}`)
})