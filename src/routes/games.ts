import express from 'express';
import sequelize from '../utils/db/conection';
import Game from '../db/models/game.js';

const router = express.Router();

router.post('/', (req, res) => {
	console.log("gola")
	console.log(Game)
	console.log(req.body);
	if(req.body || !req.body.action || req.body.action !== 'create'){
		res.status(404).end("Invalid action");
	}
	res.send("a request to create a game");
});

export default router;