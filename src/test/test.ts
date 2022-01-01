import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
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

});