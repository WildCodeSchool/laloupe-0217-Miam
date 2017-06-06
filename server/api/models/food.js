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

    // findByname(req, res) {
    //
    //     model.find({
    //         nameFood: nameFood
    //     }, function(err, nameFood) {
    //         if (!namefood) {
    //
    //             create(req, res) {
    //                 console.log("food", req.body);
    //                 model.create(req.body, (err, food) => {
    //                     if (err || !food) {
    //                         console.log("error", err.message);
    //                         res.status(500).send(err.message);
    //                     } else {
    //                         res.json({
    //                             success: true,
    //                             food: food
    //                         });
    //
    //                     }
    //                 });
    //             }
    //         }

    // findOneAndUpdate({
    //     nameFood: nameFood
    // }, {
    //     $upsert: nameFood: {
    //         countVote: countVote
    //     }
    // }, function(err, like) {
    //     if (err || !like) {
    //         console.log("error", err.message);
    //         res.status(500).send(err.message);
    //     } else {
    //         res.json({
    //             success: true,
    //             like: like
    //         });
    //     }
    // });

    // findOneAndUpdate(nameFood: nameFood, {$push: nameFood: {  countVote: countVote }}, upsert)
    // , function(err, like) {
    //     if (err || !like) {
    //         console.log("error", err.message);
    //         res.status(500).send(err.message);
    //     } else {
    //         res.json({
    //             success: true,
    //             like: like
    //         });
    //     }
    // });


    //     });
    //
    // }


    findOneAndUpdate(req, res) {
      console.log("like", req.body);
        model.findOneAndUpdate({nameFood: nameFood}, { $push: { countVote: countVote  }}, { upsert});
         function(err, like) {
            if (err || !like) {
                console.log("error", err.message);
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
