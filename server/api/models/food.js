import mongoose from 'mongoose';
import User from './user.js';
import Profile from './profile.js';

const foodSchema = new mongoose.Schema({
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile'
  },
  // FACTORY
  food: {
    nameFood: {
      type: String
    },
    countVote: [{
      type: Boolean
    }],
    doNotEat: {
      type: Boolean,
      default: false
    },
    toTaste: {
      type: Boolean,
      default: false
    }
  },
});

function arrayLimit(val) {
  return val.length <= 3;
}

let model = mongoose.model('Food', foodSchema);

export default class Food {

  findAll(req, res) {
    model.find({})
      .populate('profile')
      .exec(function(err, foods) {
        if (err || !foods) {
          res.sendStatus(403);
        } else {
          res.json(foods);
        }
      });
  }

  findOneAndUpdate(req, res) {
    model.findOneAndUpdate({
        "food.nameFood": req.body.food.nameFood
      }, {
        $set: {
          "food.nameFood": req.body.food.nameFood,
          "food.doNotEat": req.body.food.doNotEat,
          "food.toTaste": req.body.food.toTaste
        },
        $push: {
          "food.countVote": {
            $each: [{ "food.countVote": req.body.food.countVote }],
            $slice: 3
          }
        }
      }, {
        upsert: true,
        multi: true
      },
      function(err, like) {
        if (err || !like) {
          console.log("500", err);
          res.status(500).send(err.message);
        } else {
          res.json(like);
        }
      });
  }

}
