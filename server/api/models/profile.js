import mongoose from 'mongoose';
import Reward from './reward.js';

const profileSchema = new mongoose.Schema({
    name: {
      type: String
    },
    // FACTORY
    idAvatar: {
      type: String
    },
    reward: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Reward'
    },
    food: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Food'
    }
});

let model = mongoose.model('Profile', profileSchema);

export default class Profile {

    create (req,res) {
      model.create(req.body,
        function(err, profile) {
          if(err || !profile) {
            res.status(500).send(err.message);
          } else {
            res.json(profile);
          }
        });
    }

    findAll(req, res) {
        model.find({})
        .populate('reward')
        .populate('food')
        .exec(function (err, profiles) {
          if (err || !profiles) {
            res.sendStatus(403);
          } else {
            res.json(profiles);
          }
        });
    }

}
