const chai = require('chai');
const chaiHTTP = require('chai-http');
const db = require('../../config/database');
const server = require('../../index');

before(() => {
  chai.use(chaiHTTP);
});

after(() => {
  chai.request(server).close();
  db.disconnect();
});

describe('GET /', () => {
  it('returns 404 not found status code', () => {
    chai.request(server).get('/').end((err, res) => {
      expect(res).to.have.status(404);
    });
  });

  it('returns an empty response', () => {
    chai.request(server).get('/').end((err, res) => {
      expect(res.body).to.be.empty;
    });
  });
});
