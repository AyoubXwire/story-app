const mongoose = require('mongoose')
const Schema = mongoose.Schema

const storySchema = new Schema({
    title: String,
    author: String,
    content: String,
    category: String,
    date: { type: Date, default: Date.now }
})

const Story = mongoose.model('Story', storySchema)

module.exports = Story