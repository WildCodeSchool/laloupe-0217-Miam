angular.module('app')
    .controller('NavbarController', function($scope, Auth, CurrentUser, ProfilService) {
        $scope.avatars = [];
        $scope.profils = [];
        $scope.isCollapsed = true;
        $scope.auth = Auth;
        $scope.user = CurrentUser.user();

        $scope.openNav = function () {
                document.getElementById("myNav").style.width = "100%";
              };

        $scope.closeNav = function() {
            document.getElementById("myNav").style.width = "0%";
        };

        $scope.logout = function() {
            Auth.logout();
        };

        ProfilService.getAll().then(function(res) {
         var data = res.data[0];
         for (var i = 0; i < data.profil.length; i++) {
          $scope.avatars.push(data.profil[i].nameAvatar);
          $scope.profils.push(data.profil[i].userName);
         }

         console.log($scope.avatars, $scope.profils);

       });

$scope.changeProfil = function () {

var changeprofil = {
  isCurrentProfil : true,
  userName : $scope.profils[$index],
};
console.log(changeprofil);
ProfilService.put(isCurrentProfil).then(function(res) {

}, function(err) {});



};


        });
