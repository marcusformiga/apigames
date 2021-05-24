const express = require("express")
const router = express.Router()
const GamesController = require("../controllers/GamesController")

router.get("/games", GamesController.getGames)
router.get("/game/:id", GamesController.getGame)
router.post("/game", GamesController.createGame)
router.put("/game/:id", GamesController.updateGame)
router.delete("/game/:id", GamesController.removeGame)
module.exports = router