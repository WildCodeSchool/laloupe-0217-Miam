const assert = require('assert');
const request = require('supertest');

var app = "http://localhost:3000",
admin,
admin_token,
user,
user_token;


describe('API USER', function() {
    it('should connect admin', function(done) {

        request(app)
            .post('/login')
            .send({
                email: "admin@mail.com",
                passeword: "12345"
            })
            .expect(200)
            .end(function(err, res) {
                if (err) throw err;
                admin = res.body.user;
                admin_token = res.body.token;
                assert.equal(admin.email, "admin@mail.com");
                done();
            });
    });

    it('should create a user', function(done) {

        request(app)
            .post('/users')
            // .set('/Authorization', admin_token)
            .send({
                email: "user@mail.com",
                passeword: "azerty",
                // isAdmin: true
            })
            .expect(200)
            .end(function(err, res) {
                if (err) throw err;
                user = res.body.user;
                // user_token = res.body.token;
                assert.equal(user.email, "user@mail.com");
                done();
            });
    });
it('should auto delete', function(done) {
  request(app)
.delete('/users' + user._id)
.set('Authorization', admin_token)
.expect(200, done);
});
});
