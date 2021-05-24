const GameModel = require("../models/Game")
const ErrorResponse = require("../utils/errorResponse")
module.exports = {
    async getGames(req, resp, next){
        try{
            let game = await GameModel.find()
            resp.status(200).json({success: true, data: game})
        }catch(err){
            // resp.status(400).json({success: false, message: err.message})
            next(new ErrorResponse(`Jogo com id ${req.params.id} não encontrado`))
        }
        
    },
    async getGame(req, resp, next){
        let gameId = req.params.id
        try{
            let game = await GameModel.findById(gameId)
            if(!game){
              return resp.status(404).json({success: false, message: "Jogo com id informado não existe"})
            }
            resp.status(200).json({success: true, data: game})
        }catch(err){
            next(new ErrorResponse(`Jogo com id ${req.params.id} não encontrado`))
        }
    },
    async createGame(req, resp, next){
        try{
            let newGame = await GameModel.create(req.body)
            resp.status(201).json({success: true, data: newGame})
        }catch(err){
            resp.status(400).json({success: false, message: err.message})
        }
    },
    async updateGame(req, resp, next){
        let gameId = req.params.id
        let {name, price, description} = req.body
        try{
            let newGame = await GameModel.findByIdAndUpdate(gameId, req.body, {
                new: true,
                runValidators: true
            })
            if(!newGame){
                return resp.status(400).json({success: false, message: "O jogo com id informado não existe"})
            }
            resp.status(201).json({success: true, data: newGame})

        }catch(err){
            resp.status(400).json({success: false, message: err.message})
        }
    },
    async removeGame(req, resp, next){
        try{    
            let game = await GameModel.findByIdAndDelete(req.params.id)
            if(!game){
                return resp.status(404).json({success: false, message: "O jogo com id informado não existe"})
            }
            resp.status(200).json({success: true, message: `Jogo com id ${req.params.id} deletado com sucesso`})
        }catch(err){
            resp.status(400).json({success: false, message: err.message})
        }
    }

}