import mongoose from 'mongoose';
import Profile from './profile.js';

const rewardSchema = new mongoose.Schema({
    isLocked: {
      type: Boolean,
      default: true
    },
    profile: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Profile'
    }],
    // FACTORY
    nameReward: {
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

      locked(req, res) {
        model.findOneAndUpdate({
            "reward.nameReward": req.body.reward.nameReward
          }, {
            $set: {
              "profile": req.body.profile,
            },
            $push: {
              "reward.isLocked": req.body.reward.isLocked,
            },
          }, {
            upsert: true,
            multi: true,
            new: true
          },
          function(err, reward) {
            if (err || !reward) {
              res.status(500).send(err.message);
            } else {
              res.json(reward);
            }
          });
      }
    }
