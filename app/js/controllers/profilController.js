angular.module('app').controller('ProfilController', function($scope, RewardFactory, AvatarFactory, $state, ProfilService, GouterService, RewardService, Auth, CurrentUser) {
  var i = 0;
  var j = 0;
  $scope.hideModal = true;
  $scope.user = CurrentUser.user();
  $scope.avatars = AvatarFactory;
  $scope.rewards = RewardFactory;

  ProfilService.getAll().then(function(res) {
    var data = res.data;
    for (var i = 0; i < data.length; i++) {
      $scope.avatars.push(data[i]);
    }
    data.forEach(function(el) {
      if (el.isCurrentProfil) {
        $scope.currentProfilName = el.userName;
        $scope.currentAvatarName = el.nameAvatar;
        var newName = '';
        $scope.validUser = function() {
          if (newName === []) {
            newName = $scope.userName;
          } else {
            newName = $scope.userName;
          }
          ProfilService.findOneAndUpdateName(CurrentUser.user()._id, el.isCurrentProfil, $scope.userName, $scope.currentAvatar);
        };
      }
    });
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

  $scope.goHome = function() {
    $scope.hideModal = true;
    $state.go('anon.home');
  };
});
