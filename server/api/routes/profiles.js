import express from 'express';
import Profile from '../models/profile.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

        var profile = new Profile();

        router.get('/', Auth.hasAuthorization, profile.getAll);

        // router.get('/name', Auth.hasAuthorization, profile.findByName);

        // router.post('/name', Auth.hasAuthorization, profile.findOneAndUpdateName);

        // router.post('/updateProfil', Auth.hasAuthorization, profile.findOneAndUpdateProfil);

        router.post('/changeProfil', Auth.hasAuthorization, profile.changeProfil);

            app.use('/profiles', router);

        };
