const mongoose = require('mongoose')
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const Schema = mongoose.Schema
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect('mongodb://localhost:27017/student',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then((val) => console.log("db connected"));


const student = mongoose.model('st', Schema({
    location: String,
    name: String,
    failed: Boolean,
    grades: Number
}), 'st')

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.post('/data', (req, res) => {
    console.log(req.body)
    student.find({
        name:"TK"
    }).then((val)=>console.log(val))
    return res.status(200).send("Good")
})

app.listen(8000, () => { console.log("listening") })