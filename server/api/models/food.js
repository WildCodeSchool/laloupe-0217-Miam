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

let model = mongoose.model('Food', foodSchema);

export default class Food {

    create(req, res) {
      console.log("food", req.body);
        model.create(req.body, (err, food) => {
            if (err || !food) {
                console.log("error", err.message);
                res.status(500).send(err.message);
            } else {
                res.json({
                    success: true,
                    food: food
                });

            }
        });
    }


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

}
