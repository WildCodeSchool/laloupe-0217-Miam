import mongoose from 'mongoose';
import Food from './food.js';

const rewardSchema = new mongoose.Schema({
    isLocked: {
      type: Boolean,
      default: true
    },
    food: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Food'
    }
});

let model = mongoose.model('Reward', rewardSchema);

export default class Reward {

    findAll(req, res) {
      model.find({}).populate('food').exec(function (err, rewards) {
        if (err || !rewards) {
          res.sendStatus(403);
        } else {
          res.json(rewards);
        }
      });
    }

}
