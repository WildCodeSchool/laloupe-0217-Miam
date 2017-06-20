import mongoose from 'mongoose';
import Reward from './reward.js';
import Food from './food.js';
import User from './user.js';


const profileSchema = new mongoose.Schema({
    user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    profil: [{
        userName: {
            type: String
        },
        isCurrentProfil: {
            type: Boolean
        },
        nameAvatar: {
            type: String
        },
        reward: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Reward'
        }],
        food: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Food'
        }]
    }]
});


let model = mongoose.model('Profile', profileSchema);

export default class Profile {

    findOneAndUpdateProfil(req, res) {
        console.log('post (name)', req.body, req.body.profil.userName, req.body.profil.nameAvatar);
        model.findOneAndUpdate({
              "user": req.body.user,
            }, {
                $push: {
                  "profil": {
                    "userName": req.body.profil.userName,
                    "nameAvatar": req.body.profil.nameAvatar,
                    "isCurrentProfil": true,
                  }
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

    findOneAndUpdateName(req, res) {
        model.findOneAndUpdate({
                "user": req.body.user
            }, {
                $set: {
                    "profil.userName": req.body.userName,
                    "profil.nameAvatar": req.body.nameAvatar
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

    findByName(req, res) {

        model.find({
            "profil.userName": req.params.userName
        }, (err, userName) => {
            if (err || !userName) {
                console.log("403", err);
                res.sendStatus(403);

            } else {
                res.json(userName);
            }
        });
    }

    findByAvatar(req, res) {

        model.find({
            "profil.nameAvatar": req.body.nameAvatar
        }, (err, nameAvatar) => {
            if (err || !nameAvatar) {
                console.log("403", err);
                res.sendStatus(403);
            } else {
                console.log("OK", req.body.nameAvatar);
                res.json(nameAvatar);
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
