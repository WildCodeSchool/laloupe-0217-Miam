angular.module('app')
    .controller('ProfilController', function($scope, RewardFactory, AvatarFactory, $state, ProfilService, Auth, CurrentUser) {
<<<<<<< 0ec54ee4609aac8226d07ec14b9b8f43fb2973ac
        var i = 0;
        var j = 0;
        $scope.hideModal = true;
        $scope.user = CurrentUser.user();
        $scope.avatars = AvatarFactory;
        console.log($scope.avatars);


        console.log($scope.avatars[i].avatars[j].picto);
        $scope.prev = function() {
            j = 0;
            i--;
            j = 0;
            if (i < 0) {
                i = $scope.avatars.length - 1;
            }
            $scope.currentAvatar = $scope.avatars[i].avatars[j].picto;
        };
        $scope.next = function() {
            j = 0;
            i++;
            j = 0;

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
        console.log($scope.rewardList);


        $scope.openModal = function() {

            $scope.hideModal = false;


        };

        $scope.userName = "Jean";

        $scope.goHome = function() {
            $scope.hideModal = true;
            $state.go('anon.home');
            console.log($scope.hideModal);
        };


        var newName = '';
        $scope.validUser = function() {
            if (newName === []) {
                newName = $scope.userName;

            } else {

                newName = $scope.userName;
            }

            ProfilService.findOneAndUpdate($scope.user._id, $scope.userName).then(function(res) {

            }, function(err) {});

        };

    });
=======
      var i = 0;
      var j =0;
$scope.hideModal= true;
$scope.user = CurrentUser.user();
$scope.avatars = AvatarFactory;
console.log($scope.avatars);


      console.log($scope.avatars[i].avatars[j].picto);
      $scope.prev = function() {
        j = 0;
          i--;
          j = 0;
          if (i < 0) {
              i = $scope.avatars.length - 1;
          }
          $scope.currentAvatar = $scope.avatars[i].avatars[j].picto;
      };
      $scope.next = function() {
        j = 0;
          i++;
          j = 0;

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

$scope.modifier = function(){
  $scope.vueModifier = false;
};

$scope.mesRecompenses = function(){
  $scope.vueModifier = true;
};

$scope.rewardList = RewardFactory;
console.log($scope.rewardList);


$scope.openModal = function() {

  $scope.hideModal= false;


};

$scope.userName="Jean";

$scope.goHome = function() {
$scope.hideModal= true;
  $state.go('anon.home');
  console.log($scope.hideModal);
};


var newName = [];
$scope.validUser = function() {
if (newName===[]) {
newName.push($scope.userName);

}
else {

newName.splice(0,1);
newName.push($scope.userName);
}

ProfilService.create($scope.userName, $scope.user._id).then(function(res) {

}, function(err) {});

};

  });
>>>>>>> post userName into ProfilService OK
