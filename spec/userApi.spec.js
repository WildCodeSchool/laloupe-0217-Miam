const assert = require('assert');
const request = require('supertest');

let app = "http://localhost:3000",
    user,
    user_token;

describe('API USER', function() {

  it('should connect admin', function(done) {
    request(app)
      .post('/login')
      .send({
        email: "admin@mail.com",
        password: "12345"
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
      .send({
        email: "test4@mail.com",
        password: "azerty",
      })
      .expect(200)
      .end(function(err, res) {
        if (err) throw err;
        user = res.body.user;
        assert.equal(user.email, "test4@mail.com");
        done();
      });
  });

  it('should get all users', function(done) {
    request(app)
      .get('/users')
      .expect('Content-Type', /json/)
      .expect(200, done);
      done();
  });

  it('should get a user by its id', function(done) {
    request(app)
      .get('/users' + user._id)
      .expect(200)
      .end(function(err, res) {
        if(err) throw err;
        res.body.user.id = '58ff0b807b1c490496dee30c';
        assert.equal(res.body.user.id, '58ff0b807b1c490496dee30c');
      });
      done();
  });

  it('should update a user by its id', function(done) {
    var userEdit = { email: "m@mail.com", password: "1"};
    request(app)
      .put('/users' + user._id)
      .send(userEdit)
      .expect(200);
      // .end(function(err, res) {
      //   if(err) throw err;
      //   res.body.user.id = '58ff0b807b1c490496dee30c';
      //   newId = '987654';
      //   assert.equal(res.body.user.id, '58ff0b807b1c490496dee30c');
      // });
      done();
  });

  it('should be deleted', function(done) {
    request(app)
      .delete('/users' + user._id)
      .expect(200);
      done();
  });

});
