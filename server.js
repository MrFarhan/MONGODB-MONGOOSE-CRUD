const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3005
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Todo = require('./models/todo')
const cors = require('cors')

mongoose.connect('mongodb://localhost/firstmongo')

app.use("/", express.static(path.resolve(__dirname, 'Assets')))
app.use(bodyParser())


app.post('/api/create', async(req,res)=>{
    const record = req.body
    console.log(req.body)
    const response = await Todo.create(record)
    console.log("server response on create is " , response)
    res.json({status:'ok'})
})

app.listen(port,() => {
    console.log('server is running on port : ' , port)
})