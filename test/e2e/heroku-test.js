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

describe('Heroku endpoint', () => {
  describe('GET /heroku/keepalive', () => {
    it('has http status code 200', () => {
      chai.request(server).get('/heroku/keepalive').end((_, res) => {
        expect(res).to.have.status(200);
      });
    });
    it('retrieves an empty body', () => {
      chai.request(server).get('/heroku/keepalive').end((_, res) => {
        expect(res.body).to.empty;
      });
    });
  });
});
