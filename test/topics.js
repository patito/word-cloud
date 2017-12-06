var request = require('supertest'),
    url = 'http://127.0.0.1:3001';

describe('Testing API Endpoints', function() {

    describe('GET /api/v1/topics', function() {
        it('it should return all topics', function(done) {
            request(url)
                .get('/api/v1/topics')
                .expect(200, done);
        });
    });

    describe('GET /api/v1/fakes', function() {
        it('it should return 404 to fakes endpoint', function(done) {
            request(url)
                .get('/api/v1/fake')
                .expect(404, done);
        });
    });

    describe('GET /api/v1/topics/Invalid_ID', function() {
        it('it should return 404 for wrong ID', function(done) {
            request(url)
                .get('/api/v1/topics/Invalid_ID')
                .expect(404, done);
        });
    });

});