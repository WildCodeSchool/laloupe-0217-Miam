import mongoose from 'mongoose';
import Reward from './reward.js';
import Food from './food.js';
import User from './user.js';


const profileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    account: [{
        userName: {
            type: String
        },
        _isCurrentUser: {
            type: Boolean
        },
        nameAvatar: {
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
    }]
});


let model = mongoose.model('Profile', profileSchema);

export default class Profile {



    findOneAndUpdate(req, res) {
        console.log('post', req.body.user, req.body.userName);
        model.findOneAndUpdate({
                "user": req.body.user
            }, {
                $set: {
                    "account.userName": req.body.userName
                }
            }, {
                upsert: true,
            },
            function(err, name) {
                if (err || !name) {
                    console.log("500", err);
                    res.status(500).send(err.message);
                } else {
                    res.json(name);
                }
            });
    }

    findAll(req, res) {
        model.find({})
            .populate('reward')
            .populate('food')
            .exec(function(err, profiles) {
                if (err || !profiles) {
                    res.sendStatus(403);
                } else {
                    res.json(profiles);
                }
            });
    }

}
