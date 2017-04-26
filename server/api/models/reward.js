import mongoose from 'mongoose';
import Profile from './profile.js';

const rewardSchema = new mongoose.Schema({
    isLocked: {
      type: Boolean,
      default: true
    },
    profile: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Profile'
    },
    // FACTORY
    idReward: {
      type: String
    }
});

let model = mongoose.model('Reward', rewardSchema);

export default class Reward {

    findAll(req, res) {
      model.find({})
      .populate('profile')
      .exec(function (err, rewards) {
        if (err || !rewards) {
          res.sendStatus(403);
        } else {
          res.json(rewards);
        }
      });
    }

}
