const express = require('express')
const mongoose = require('mongoose')
var cors = require('cors')

var app = express()

// Connect to database
if(process.env.NODE_ENV === 'production') {
    mongoose.connect('mongodb://benayoubid:benayoubid101@ds055935.mlab.com:55935/story', { useNewUrlParser: true })
} else {
    mongoose.connect('mongodb://localhost:27017/story', { useNewUrlParser: true })
}

// Middleware
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// API
const Story = require('./models/story')

app.get('/', (req, res) => {
    res.json({ msg: 'Home' })
})

app.get('/stories', (req, res) => {
    Story.find().then(stories => res.json(stories))
})

app.post('/stories', (req, res) => {
    const data = {
        title: req.body.title,
        author: req.body.author,
        content: req.body.content,
        category: req.body.category
    }

    Story.create(data).then(() => res.json('story added'))
})

// server
app.listen(process.env.PORT || 3000, () => console.log('running..'))