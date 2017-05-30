import express from 'express';
import Food from '../models/food.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    var food = new Food();
    router.post('/', Auth.hasAuthorization, food.create);

    router.get('/', Auth.hasAuthorization, food.findAll);

    router.post('/like', Auth.hasAuthorization, food.createLike);

    app.use('/foods', router);

};
