angular.module('app').controller('NavbarController', function($scope, Auth, CurrentUser, ProfilService) {
  $scope.avatars = [];
  $scope.profils = [];
  $scope.isCollapsed = true;
  $scope.auth = Auth;
  $scope.user = CurrentUser.user();

  $scope.openNav = function() {
    document.getElementById("myNav").style.width = "100%";
  };

  $scope.closeNav = function() {
    document.getElementById("myNav").style.width = "0%";
  };

  $scope.logout = function() {
    Auth.logout();
  };

  ProfilService.getAll().then(function(res) {
    var data = res.data;
    for (var i = 0; i < data.length; i++) {
      $scope.avatars.push(data[i]);
    }
    data.forEach(function(el) {
      if (el.isCurrentProfil) {
        $scope.currentProfilName = el.userName;
        $scope.currentAvatarName = el.nameAvatar;
      }
    });
  });

  $scope.changeProfil = function($index) {
    var changeprofil = {
      user: $scope.user._id,
      userName: $scope.avatars[$index].userName
    };
    ProfilService.changeProfil(changeprofil).then(function(res) {
      location.reload(true);
    }, function(err) {});
  };

});
