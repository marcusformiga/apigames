const mongoose = require("mongoose")

const connectDb = async () =>{
    try{
        const connection = await mongoose.connect("mongodb+srv://151189:151189@cluster0.uuuzh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true})
        console.log("Conexão com o banco de dados feita com sucesso")
    }catch(err){
        console.log(err)
    }
}

module.exports = connectDb