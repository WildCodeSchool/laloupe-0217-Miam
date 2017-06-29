import express from 'express';
import Reward from '../models/reward.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    var reward = new Reward();

    router.get('/', Auth.hasAuthorization, reward.findAll);

    router.post('/isLocked', Auth.hasAuthorization, reward.locked);

    app.use('/rewards', router);

};
