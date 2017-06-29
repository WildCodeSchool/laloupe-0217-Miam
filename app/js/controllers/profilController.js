angular.module('app')
  .controller('ProfilController', function($scope, RewardFactory, AvatarFactory, $state, ProfilService, GouterService, RewardService, Auth, CurrentUser) {
      var i = 0;
      var j = 0;
      $scope.hideModal = true;
      $scope.user = CurrentUser.user();
      $scope.avatars = AvatarFactory;
      $scope.rewards = RewardFactory;


      ProfilService.getAll().then(function(res) {
          var data = res.data;
          console.log("data profile", data);
          for (var i = 0; i < data.profil.length; i++) {
              $scope.avatars.push(data.profil[i]);
              console.log("$scope.avatars", $scope.avatars);
          }

          data.profil.forEach(function(el){
            if(el.isCurrentProfil){
              $scope.currentProfilName = el.userName;
              $scope.currentAvatarName = el.nameAvatar;
            }
          });
          console.log("$scope.currentProfilName", $scope.currentProfilName);

      });

      $scope.prev = function() {
          j = 0;
          i--;

          if (i < 0) {
              i = $scope.avatars.length - 1;
          }
          $scope.currentAvatar = $scope.avatars[i].avatars[j].picto;
      };
      $scope.next = function() {
          j = 0;
          i++;


          if (i >= $scope.avatars.length) {
              i = 0;
          }
          $scope.currentAvatar = $scope.avatars[i].avatars[j].picto;
      };
      $scope.up = function() {
          j--;
          if (j < 0) {
              j = $scope.avatars[i].avatars.length - 1;
          }
          $scope.currentAvatar = $scope.avatars[i].avatars[j].picto;
      };
      $scope.down = function() {
          j++;
          if (j < 0) {
              j = $scope.avatars[i].avatars.length - 1;
          }
          $scope.currentAvatar = $scope.avatars[i].avatars[j].picto;
      };
      $scope.currentAvatar = $scope.avatars[i].avatars[j].picto;

      $scope.vueModifier = false;
      $scope.vueMesRecompenses = true;

      $scope.modifier = function() {
        $scope.vueModifier = false;
      };

      $scope.mesRecompenses = function() {
        $scope.vueModifier = true;
      };

      $scope.rewardList = RewardFactory;


              $scope.openModal = function() {

                  $scope.hideModal = false;


              };

              //$scope.userName = $scope.currentProfilName;

              $scope.goHome = function() {
                  $scope.hideModal = true;
                  $state.go('anon.home');
              };


              var newName = '';

              $scope.validUser = function() {
                  if (newName === []) {
                      newName = $scope.userName;

                  } else {

                      newName = $scope.userName;
                  }
                  ProfilService.findOneAndUpdateName($scope.user._id, $scope.userName, $scope.currentAvatar).then(function(res) {
      console.log($scope.user._id, $scope.userName, $scope.currentAvatar);
                  }, function(err) {});
              };



      // REWARDS
      /*$scope.profile = "";
      ProfilService.getAll().then(function(res) {
        var data = res.data;
        console.log("data", data);
        for (var i = 0; i < data.length; i++) {
          if (res.data[i].isCurrentProfil === true) {
            $scope.profile += res.data[i]._id;
            console.log("$scope.profile", $scope.profile);
          }
        }

        console.log("$scope.rewards", $scope.rewards);

        $scope.foodRewards = [];
        GouterService.findByProfile($scope.profile).then(function(res) {
          $scope.foodRewards = res.data;
          console.log("$scope.foodRewards", $scope.foodRewards);
          var nameFoodReward = $scope.foodRewards.map(function(foodReward) {
            return foodReward.food.nameFood;
          });
          var voteFoodReward = $scope.foodRewards.map(function(foodReward) {
            return foodReward.food.countVote;
          });

          for (var m = 0; m < voteFoodReward.length; m++) {
            console.log("voteFoodReward[m]", voteFoodReward[m]);
            if(voteFoodReward[m][0] === true || voteFoodReward[m][0] === false) {
              console.log("Congratulations! You voted one time");
              $scope.index = $scope.rewards[m].name.indexOf("Découverte");
              console.log("$scope.index", $scope.index);
              if ($scope.index !== -1) {
                $scope.rewards[$scope.index].votes = $scope.foodRewards[m].food.countVote;
                console.log("$scope.rewards", $scope.rewards);
                if ($scope.user.email !== undefined) {
                  RewardService.locked("Découverte", $scope.profile).then(function(res) {}, function(err) {});
                } else {
                  LocalService.set("Reward", JSON.stringify("Découverte")).then(function(res) {}, function(err) {});
                }

              }
            }

            if (voteFoodReward[m].length <= 3) {
              console.log("You voted 3 times for one aliment!");
              $scope.index = $scope.rewards[m].name.indexOf("Découverte");
              console.log("$scope.index", $scope.index);
              if ($scope.index !== -1) {
                $scope.rewards[$scope.index].votes = $scope.foodRewards[m].food.countVote;
                console.log("$scope.rewards", $scope.rewards);
                if ($scope.user.email !== undefined) {
                  RewardService.locked("Petit goûteur", $scope.profile).then(function(res) {}, function(err) {});
                } else {
                  LocalService.set("Reward", JSON.stringify("Petit goûteur")).then(function(res) {}, function(err) {});
                }
              }
            }

          }

        });
      });*/

    });
