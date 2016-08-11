'use strict';

var request = require('supertest');

describe('Brands', function () {
    var app;
    beforeEach(function () {
        app = require('../app.js');
    });
    afterEach(function () {
        app.close();
    });
    it('gets all brands', function (done) {
        request(app)
            .get('/brands')
            .expect(200)
            .end(function(err, res) {
                if (err) return done.fail(res);
                expect(res.body.length).toBeGreaterThan(0);
                done(res);
            });
    });
    it('gets a single brand', function (done) {
        request(app)
            .get('/brands/08a5c723-22dc-4f87-a5a5-13b602cf3e75')
            .expect(200)
            .end(function(err, res) {
                if (err) return done.fail(res);
                expect(res.body).not.toBeNull();
                done(res);
            });
    });
    it('creates a new brand', function (done) {
        request(app)
            .post('/brands')
            .send({ id: 1, name: 'Test Brand', email: 'test@brands.com', phone_number: '(555) 555-5555', city: 'New York', state: 'New York'})
            .end(function (err, res) {
                if (err) return done.fail(res);
                expect(res.body.name).toEqual('Test Brand');
                done(res);
            });
    });
  it('deletes a single brand', function (done) {
        request(app)
            .delete('/brands/1')
            .expect(200)
            .end(function(err, res) {
                if (err) return done.fail(res);
                expect(res.body).not.toBeNull();
                done(res);
            });
    });
});