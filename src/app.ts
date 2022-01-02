import express from 'express';
import gameRouter from './routes/games';

const app = express();
app.use(express.json());

app.get('/ping', ( _, res) => {
	console.log('someone ping here');
	res.send('pong');
});


app.use('/api/games', gameRouter);

export default app;