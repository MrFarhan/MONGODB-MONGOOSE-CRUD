const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3005

app.use("/", express.static(path.resolve(__dirname, 'Assets')))

app.listen(port,() => {
    console.log('server is running on port : ' , port)
})