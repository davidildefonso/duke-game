import express from 'express';
const app = express();
app.use(express.json());

app.get('/ping', ( _, res) => {
	console.log('someone ping here');
	res.send('pong');
});


export default app;