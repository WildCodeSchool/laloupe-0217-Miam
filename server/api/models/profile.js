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
      if (isCurrentProfil === true){

        model.find({
            "profil.userName": req.params.userName,
            "profil.nameAvatar": req.params.nameAvatar
        }, (err, userName) => {
            if (err || !userName) {
                console.log("403", err);
                res.sendStatus(403);

            } else {
                res.json(userName);
            }
        });
      }
    }


    getAll(req, res) {
        model.find({}, (err, profiles) => {
                if (err || !profiles) {
                    res.sendStatus(403);
                    console.error( profiles , err  );

                } else {
                  console.log('OK', profiles);
                    res.json(profiles);
                }
            });
    }

}
