import express from 'express';
import Food from '../models/food.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    var food = new Food();

    router.get('/', Auth.hasAuthorization, food.findAll);

    router.post('/', Auth.hasAuthorization, food.findOneAndUpdateFood);

    router.post('/', Auth.hasAuthorization, food.findOneAndUpdate);

    app.use('/foods', router);

};
