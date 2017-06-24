import express from 'express';
import Food from '../models/food.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    var food = new Food();

    router.get('/findLiked', Auth.hasAuthorization, food.findLiked);

    router.get('/', Auth.hasAuthorization, food.findAll);

    router.post('/likeAll', Auth.hasAuthorization, food.likeAll);

    router.post('/like', Auth.hasAuthorization, food.like);

    router.post('/taste', Auth.hasAuthorization, food.taste);

    router.post('/notEating', Auth.hasAuthorization, food.notEating);

    app.use('/foods', router);

};
