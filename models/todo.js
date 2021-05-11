const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    record: { type: String, required:true },
    date: Number
})

const model = mongoose.model('TodoModel', TodoSchema)

module.exports = model