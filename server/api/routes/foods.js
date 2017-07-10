import express from 'express';
import Food from '../models/food.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

  var food = new Food();

  router.get('/', food.findAll);

  router.get('/:id', food.findByProfile);

  router.post('/likeAll', food.likeAll);

  router.post('/like', food.like);

  router.post('/taste', food.taste);

  router.post('/notEating', food.notEating);

  app.use('/foods', Auth.hasAuthorization, router);

};
