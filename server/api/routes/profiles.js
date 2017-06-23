import express from 'express';
import Profile from '../models/profile.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

        var profile = new Profile();

        router.post('/', Auth.hasAuthorization, profile.findOneAndUpdateProfil);

        // router.post('/', Auth.hasAuthorization, profile.changeProfil);

        router.post('/', Auth.hasAuthorization, profile.findOneAndUpdateName);

        router.get('/', Auth.hasAuthorization, profile.getAll);

        router.get('/', Auth.hasAuthorization, profile.findByName);


            app.use('/profiles', router);

        };
