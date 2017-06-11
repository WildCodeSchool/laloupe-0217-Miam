import express from 'express';
import Reward from '../models/reward.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    var reward = new Reward();

    router.get('/', Auth.hasAuthorization, reward.findAll);

    app.use('/rewards', router);

};
