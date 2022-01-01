import { Sequelize} from 'sequelize';
import config from '../../config/config';
import dotenv from 'dotenv';
dotenv.config();

const constants = process.env.NODE_ENV === 'test' ? config.test : config.development;

const { username, password, database, host , port , dialect} = constants;

const sequelize = new Sequelize(`${dialect}://${username}:${password}@${host}:${port}/${database}`) ;

export default sequelize;