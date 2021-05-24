const express = require("express")
const port = 3002
const server = express()
const router = require("./routes/gamesRouter")
const connection = require("./database/connection")
const errorHandle = require("./middlewares/error")
connection()
server.use(express.json())
server.use(express.urlencoded({extended: false}))
server.use("/api/v1", router)
server.use(errorHandle)
server.get("/", (req, resp) =>{
    resp.send("Hello world")
})

server.listen(port, err =>{
    if(err){
        console.log(err)
    }
    console.log(`Servidor rodando na porta ${port}`)
})

