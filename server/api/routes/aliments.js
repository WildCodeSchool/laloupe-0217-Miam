import express from 'express';
import Aliment from '../models/aliment.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    var aliment = new Aliment();

    router.get('/', aliment.findAll);

    app.use('/aliments', router);

};
