import express from 'express';
import Profile from '../models/profile.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    var profile = new Profile();

    router.post('/', Auth.hasAuthorization, profile.create);

    router.get('/', Auth.hasAuthorization, profile.findAll);

    app.use('/profiles', router);

};
