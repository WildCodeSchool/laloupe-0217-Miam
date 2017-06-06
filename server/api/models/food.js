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
            type: Boolean,
            limit: 3
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
        console.log("like", req.body, nameFood);
        model.findOneAndUpdate({
            nameFood: like
        }, {
            $push: {
                countVote: countVote
            }
        }, {
            upsert: true,
            countVote: countVote
        });

        function like(err, like) {
            if (err || !like) {
                console.log("error", err.message, nameFood);
                res.status(500).send(err.message);
            } else {
                res.json({
                    success: true,
                    like: like
                });

            }
        }
    }
}
