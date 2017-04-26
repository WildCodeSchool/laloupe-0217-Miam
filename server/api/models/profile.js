import mongoose from 'mongoose';
import Reward from './reward.js';

const profileSchema = new mongoose.Schema({
    name: {
      type: String
    },
    avatar: {
      type: String
    },
    reward: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Reward'
    }
});

let model = mongoose.model('Profile', profileSchema);

export default class Profile {

    findAll(req, res) {
        model.find({}, (err, profiles) => {
            if (err || !profiles) {
                res.sendStatus(403);
            } else {
                res.json(profiles);
            }
        });
    }

}
