const mongoose = require("mongoose")

const GameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "O jogo precisa ter um nome para ser cadastrado"],
        trim: true,
        maxlenght: [75, "O jogo não pode ter mais de 75 caracteres"],
        unique: true
    },
    price: {
        type: Number,
        required: [true, "O jogo precisa ter preço para ser cadastrado"],
        trim: true
    },
    description:{
        type: String,
        trim: true

    }
},
{
    timestamps: true
})

const GameModel = new mongoose.model("game", GameSchema)

module.exports = GameModel