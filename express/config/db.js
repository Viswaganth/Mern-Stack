const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://viswa30102005:viswa044@cluster0.ktta2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

const connection = mongoose.connection

connection.on('connected',()=>{console.log('db connected')})
connection.on('error',()=>{console.log('db error')})