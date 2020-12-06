require('dotenv/config')
const express = require("express")
const server = express()
const routes = require("./src/main")
const db = require('./src/Config/db')
const bodyPars = require('body-parser')
const morgan = require("morgan")

server.use(bodyPars.urlencoded({extended: false}))
server.use(bodyPars.json())
server.use(morgan("dev"))
server.use(routes)




db.connect()
    .then((res) => {
        console.log("Database Connect")
    })
    
    .catch((err) => {
        console.log("Database not connect")
        console.log(err)
    })

server.listen(9100, () => {
    console.log("Service running on port 9100");
})



