const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3005
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Todo = require('./models/todo')
console.log("todo required is " , Todo)
console.log("todo from mongoose " , mongoose.model('TodoModel'))

app.use("/", express.static(path.resolve(__dirname, 'Assets')))
app.use(bodyParser.json())


app.listen(port,() => {
    console.log('server is running on port : ' , port)
})