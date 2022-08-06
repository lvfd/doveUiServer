// lvfd@acca.com.cn
// 20220806
const express = require('express')
const app = express()
const port = 3013

// for uikit:
app.use('/doveuikit', require('./router-uikit'))

// for webpack:
// app.use('/doveutils', webpack)



// Running log:
app.listen(port, () => {
  console.log(`DOVE_UI_SERVER on PORT ${port}`)
})