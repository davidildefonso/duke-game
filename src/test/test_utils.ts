import { Sequelize} from 'sequelize';

export const connectToDatabase  = async (connection: Sequelize) : Promise<string> => {
	try {
		await connection.authenticate();
		return 'Connection has been established successfully.';
	} catch (error) {
		return `Unable to connect to the database:' ${error}`;
	}
}

