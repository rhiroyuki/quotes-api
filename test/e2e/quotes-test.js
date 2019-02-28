const chai = require('chai');
const chaiHTTP = require('chai-http');
const db = require('../../config/database');
const server = require('../../index');
const Quote = require('../../app/models/quote');

before(() => {
  chai.use(chaiHTTP);
});

after((done) => {
  chai.request(server).close();
  db.disconnect();
  done();
});

describe('Quotes API', () => {
  afterEach((done) => {
    Quote.deleteMany({}, done);
  });

  describe('DELETE /quotes/:id', () => {
    let quote;

    beforeEach((done) => {
      quote = new Quote({ message: 'Hi', author: 'John' });

      quote.save().then(() => done());
    });

    it('returns http status code 204', (done) => {
      chai.request(server).delete(`/quotes/${quote.id}`).end((_err, res) => {
        expect(res).to.have.status(204);
        done();
      });
    });

    it('returns an empty response', (done) => {
      chai.request(server).delete(`/quotes/${quote.id}`).end((_err, res) => {
        expect(res.body).to.be.empty;
        done();
      });
    });

    it('deletes the quote', (done) => {
      chai.request(server).delete(`/quotes/${quote.id}`).end(() => {
        Quote.countDocuments({}, (_, count) => {
          expect(count).to.eq(0);
          done();
        });
      });
    });
  });

  describe('GET /quotes/:id', () => {
    let quote;

    beforeEach((done) => {
      quote = new Quote({ message: 'Hi', author: 'John' });

      quote.save().then(() => done());
    });

    it('returns 200 http status code', (done) => {
      chai.request(server).get(`/quotes/${quote.id}`).end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
    });

    it('returns the quote', (done) => {
      chai.request(server).get(`/quotes/${quote.id}`).end((err, res) => {
        expect(res.body.data.quote).to.include({ message: 'Hi', author: 'John', _id: quote.id });
        done();
      });
    });
  });

  describe('POST /quotes', () => {
    const quoteParams = { message: 'Hello World', author: 'Ricardo' };

    it('persists the quote sent', (done) => {
      chai.request(server).post('/quotes').send(quoteParams).end(() => {
        Quote.countDocuments({}, (_, count) => {
          expect(count).to.eq(1);
          done();
        });
      });
    });

    it('returns a 201 status code', () => {
      chai.request(server)
        .post('/quotes')
        .send(quoteParams)
        .end((err, res) => {
          expect(res).to.have.status(201);
        });
    });
  });

  describe('PUT /quotes/:id', () => {
    let quote;
    const quoteParams = { message: 'Hello', author: 'Jim' };

    beforeEach((done) => {
      quote = new Quote({ message: 'Hi', author: 'John' });

      quote.save().then(() => done());
    });

    it('returns the http status 200', () => {
      chai.request(server)
        .put(`/quotes/${quote.id}`)
        .send(quoteParams)
        .end((err, res) => {
          expect(res).to.have.status(200);
        });
    });
  });

  describe('GET /quotes', () => {
    let quote;

    beforeEach((done) => {
      quote = new Quote({ message: 'Hi', author: 'John' });

      quote.save().then(() => done());
    });

    it('returns an http status code 200', () => {
      chai.request(server).get('/quotes').end((err, res) => {
        expect(res).to.have.status(200);
      });
    });

    it('returns a single quote', (done) => {
      chai.request(server).get('/quotes').end((err, res) => {
        expect(res.body.data.length).to.eq(1);
        done();
      });
    });

    it('returns a quote list', (done) => {
      chai.request(server).get('/quotes').end((err, res) => {
        expect(res.body.data[0]).to.include({ message: 'Hi', author: 'John' });
        done();
      });
    });
  });
});
