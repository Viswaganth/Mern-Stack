const express = require('express')
const app = express()
const db = require('./config/db')
const port = 3000
app.get('/',(req,res) => {

    res.send("Welcome to server")
}
)

app.listen(port, () => {
    console.log("server is running in port :" + port)
}
)

console.log("hello hi")