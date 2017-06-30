import mongoose from 'mongoose';
import Reward from './reward.js';
import Food from './food.js';
import User from './user.js';


const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  userName: {
    type: String
  },
  isCurrentProfil: {
    type: Boolean
  },
  nameAvatar: {
    type: String
  },
});

let model = mongoose.model('Profile', profileSchema);

export default class Profile {

  getAll(req, res) {
    model.find({}, (err, profiles) => {
      if (err || !profiles) {
        res.sendStatus(403);
        console.error(profiles, err);

      } else {
        // console.log('GetAll OK', profiles);
        res.json(profiles);
      }
    });
  }

  // findOneAndUpdateName(req, res) {
  //   model.findOneAndUpdate({
  //       "user": req.body.user,
  //       "isCurrentProfil": true,
  //     }, {
  //       $set: {
  //         "userName": req.body.userName,
  //         "nameAvatar": req.body.nameAvatar
  //       }
  //     }, {
  //       new: true,
  //     },
  //     function(err, profile) {
  //       if (err || !profile) {
  //         console.log("500", err);
  //         res.status(500).send(err.message);
  //       } else {
  //         res.json(profile);
  //       }
  //     });
  // }


  // findByName(req, res) {
  //     if (isCurrentProfil === true) {
  //
  //         model.find({
  //             "profil.userName": req.params.userName,
  //             "profil.nameAvatar": req.params.nameAvatar
  //         }, (err, userName) => {
  //             if (err || !userName) {
  //                 console.log("403", err);
  //                 res.sendStatus(403);
  //
  //             } else {
  //                 res.json(userName);
  //             }
  //         });
  //     }
  // }

  /*  findOneAndUpdateProfil(req, res) {
      // console.log('post (name)', req.body, req.body.profil.userName, req.body.profil.nameAvatar);
      model.findOneAndUpdate({
        user: req.body.user._id,
      }, function(err, user) {
        // console.log("user profil", user.profil);
        profil = profil.map(function(element) {
            if (element.userName != req.body.userName) {
              element.isCurrentProfil = false;
            } else {

              $push: {
                profil: {
                  userName = req.body.profil.userName,
                  nameAvatar = req.body.profil.nameAvatar,
                  isCurrentProfil = true;
                }
              }
            }
            return element;
          }), {
            upsert: true,
          },
          function(err, name) {
            if (err || !name) {
              console.log("500", err);
              res.status(500).send(err.message);
            } else {
              res.json(name);
            }
          };
      });
    }*/


  // changeProfil(req, res) {
  //   console.log("req.body.userName", req.body.userName);
  //   model.findOneAndUpdate({
  //       "user": req.body.user,
  //     }, function(userName) {
  //       if (userName !== req.body.userName) {
  //         console.log("req.body.userName", req.body.userName);
  //         $set: {
  //           isCurrentProfil = false;
  //           console.log("isCurrentProfil", isCurrentProfil);
  //         }
  //       } else {
  //         $set: {
  //           isCurrentProfil = true;
  //           console.log("isCurrentProfil true", isCurrentProfil);
  //         }
  //       }
  //     }, {
  //       upsert: true,
  //       new: true,
  //     },
  //     function(err, profile) {
  //       if (err || !profile) {
  //         console.log("500", err);
  //         res.status(500).send(err.message);
  //       } else {
  //         res.json(profile);
  //       }
  //     });
  // }



  // changeProfil(req, res) {
  //   model.findOne({
  //     user: req.body.user,
  //     userName: req.body.userName },
  //     function(err, userName) {
  //       userName =
  //     }
  //   );
  // }

  changeProfil(req, res) {
    model.update({
        user: req.body.user
      }, {
        $set: {
          isCurrentProfil: false
        }
      }, {
        multi: true
      },
      function(err, profils) {
        console.log(profils);
        if (err) return res.status(500).send(err);
        if (!profils) {
          res.status(404);
        } else if (err) {
          res.status(500).send(err);
        } else {
          model.findOneAndUpdate({
              user: req.body.user,
              userName: req.body.userName
            }, {
              $set: {isCurrentProfil: true}
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


  // changeProfil(req, res) {
  //   model.findOneAndUpdate({
  //       user: req.body.user
  //     }, function(err, user) {
  //       if (err) {
  //         console.log("Nope, NOPE");
  //         res.status(500).send(err.message);
  //       } else if (!user) {
  //         console.log('404', user);
  //         res.status(404).send("Aucun profil pour cet id d'utilisateur");
  //       } else {
  //         if (userName != req.body.userName) {
  //           isCurrentProfil = false;
  //         } else {
  //           isCurrentProfil = true;
  //         }
  //       }
  //     },
  //     // user.save(function(err) {
  //     //   res.json(user);
  //     // })
  //     // );
  //     function(err, profile) {
  //       if (err || !profile) {
  //         console.log("500", err);
  //         res.status(500).send(err.message);
  //       } else {
  //         res.json(profile);
  //       }
  //     });
  // }

  // changeProfil(req, res) {
  //   model.findOne({
  //     user: req.body.user._id
  //   }, function(err, user) {
  //     if (err) {
  //       res.status(500).send(err.message);
  //     } else if (!user) {
  //       console.log('404', user);
  //       res.status(404).send("Aucun profil pour cet id d'utilisateur");
  //     } else {
  //       user = user.map(function(element) {
  //         if (element.userName != req.body.userName) {
  //           element.isCurrentProfil = false;
  //         } else {
  //           element.isCurrentProfil = true;
  //         }
  //         return element;
  //
  //       });
  //       user.save(function(err) {
  //         res.json(user);
  //       });
  //     }
  //   });
  // }

}
