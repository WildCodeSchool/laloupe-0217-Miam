import mongoose from 'mongoose';
import Reward from './reward.js';
import Food from './food.js';
import User from './user.js';

const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  userName: String,
  isCurrentProfil: Boolean,
  nameAvatar: String
});

let model = mongoose.model('Profile', profileSchema);

export default class Profile {

  getAll(req, res) {
    model.find({}, (err, profiles) => {
      if (err || !profiles) {
        res.sendStatus(403);
        console.error(profiles, err);
      } else {
        res.json(profiles);
      }
    });
  }

  changeProfil(req, res) {
    model.update({
      user: req.body.user
    }, {
      $set: {
        isCurrentProfil: false
      }
    }, {
      multi: true
    }, function(err, profils) {
      console.log(profils);
      if (err)
        return res.status(500).send(err);
      if (!profils) {
        res.status(404);
      } else if (err) {
        res.status(500).send(err);
      } else {
        model.findOneAndUpdate({
          user: req.body.user,
          userName: req.body.userName
        }, {
          $set: {
            isCurrentProfil: true
          }
        }, {
          new: true
        }, function(err, profil) {
          console.log(profil);
          if (!profil) {
            res.status(404);
          } else if (err) {
            res.status(500).send(err);
          } else {
            res.json(profil);
          }
        });
      }
    });
  }

}
