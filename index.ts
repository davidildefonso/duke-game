import app from './src/app';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.NODE_ENV === 'test' ? process.env.APP_PORT_TEST : process.env.APP_PORT_DEV;


app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});