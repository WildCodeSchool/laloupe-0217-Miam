import express from 'express';
import Reward from '../models/reward.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

  var reward = new Reward();

  router.get('/', reward.findAll);

  router.post('/isLocked', reward.locked);

  app.use('/rewards', Auth.hasAuthorization, router);

};
