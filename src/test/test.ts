import chai, { assert } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import { Sequelize} from 'sequelize';
import constants from '../config/config'; 
import { connectToDatabase } from './test_utils';
import connection from '../utils/db/conection';

const { username, password, database, host , port , dialect} = constants.test;
const should = chai.should();
const expect = chai.expect;
chai.use(chaiHttp);

describe("on start up api", () => {
	it('request to /ping  should return status code 200', async () => {	
			const response =  await chai.request(app).get('/ping');
			response.should.have.status(200);		
    });

	it('request to /ping  should return "pong"', async () => {	
			const response =  await chai.request(app).get('/ping');	 
			expect(response.text).eql("pong");	
    });

	it('a connection to the database can be established', async () => {	
			const sequelize = new Sequelize(`${dialect}://${username}:${password}@${host}:${port}/${database}`) ;
			const response =  await connectToDatabase(sequelize);
			expect(response).eql("Connection has been established successfully.");	
    });

	it('a game is added to database on post  to "/api/games" ' , async () => {
			const response =  await chai.request(app).post('/api/games').send({action: "create"}); 
			response.should.have.status(200);
			response.body.should.be.a('object');
			response.body.should.have.property('game_id');
			response.body.game_id.should.be(2);
			
	});

});



describe("on database connection established", () => {
	it('it can retrieve data from test database ', async () => {	
			const [results, metadata]  = await connection.query("SELECT * FROM test");
			expect(metadata).to.exist;
			expect(results).to.exist;	
			expect(results).to.have.length(3);
			assert.deepEqual(results, [
				{ id: 1, name: 'david' },
				{ id: 2, name: 'sebas' },
				{ id: 3, name: 'serafina' }
			]);
			
    });



});