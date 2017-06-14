import mongoose from 'mongoose';
import Reward from './reward.js';

const profileSchema = new mongoose.Schema({

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

    create(req, res) {
        model.create(req.body,
            function(err, name) {
                if (err || !name) {
                  console.log('ok', name);
                    res.status(500).send(err.message);
                } else {
                    res.json(name);
                    console.log('nope', name);

                }
            });
    }

    // findOneAndUpdate(req, res) {
    //     model.findOneAndUpdate({
    //         userName: req.body.userName
    //     }, {
    //         $push: {
    //             countVote: req.body.food.nameFood
    //         }
    //     }, {
    //         upsert: true,
    //     },
    //
    //     function (err, like) {
    //         if (err || !like) {
    //           console.log("500", req.body);
    //             res.status(500).send(err.message);
    //         } else {
    //             res.json(like);
    //         }
    //     });
    // }




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
