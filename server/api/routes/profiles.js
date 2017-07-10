import express from 'express';
import Profile from '../models/profile.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

  var profile = new Profile();

  router.get('/', profile.getAll);

  router.post('/changeProfil', profile.changeProfil);

  app.use('/profiles', Auth.hasAuthorization, router);

};
