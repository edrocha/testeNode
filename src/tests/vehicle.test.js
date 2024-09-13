const chai = require('chai');
const chaiHttp = require('chai-http');
const { app, db } = require('../index');

chai.use(chaiHttp);
const { expect } = chai;

describe('Vehicle API', () => {
  before((done) => {
    db.query('TRUNCATE TABLE vehicles', done);
  });

  it('should create a new vehicle', (done) => {
    chai.request(app)
      .post('/vehicles')
      .send({
        placa: 'ABC1234',
        chassi: '1234567890',
        renavam: '1234567890',
        modelo: 'Model X',
        marca: 'Brand Y',
        ano: 2020
      })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('id');
        expect(res.body.placa).to.equal('ABC1234');
        done();
      });
  });

  it('should get all vehicles', (done) => {
    chai.request(app)
      .get('/vehicles')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('should get a vehicle by ID', (done) => {
    // Assumes a vehicle with ID 1 exists
    chai.request(app)
      .get('/vehicles/1')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('id');
        done();
      });
  });

  it('should update a vehicle', (done) => {
    // Assumes a vehicle with ID 1 exists
    chai.request(app)
      .put('/vehicles/1')
      .send({ modelo: 'Model Y' })
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should delete a vehicle', (done) => {
    // Assumes a vehicle with ID 1 exists
    chai.request(app)
      .delete('/vehicles/1')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});
