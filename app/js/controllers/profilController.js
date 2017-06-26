angular.module('app')
    .controller('ProfilController', function($scope, RewardFactory, AvatarFactory, $state, ProfilService, Auth, CurrentUser) {
        var i = 0;
        var j = 0;
        $scope.hideModal = true;
        $scope.user = CurrentUser.user();
        $scope.avatars = AvatarFactory;


        ProfilService.getAll().then(function(res) {
            var data = res.data[0];
            for (var i = 0; i < data.profil.length; i++) {
                $scope.avatars.push(data.profil[i]);
            }


            data.profil.forEach(function(el){
              if(el.isCurrentProfil){
                $scope.currentProfilName = el.userName;
                $scope.currentAvatarName = el.nameAvatar;
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

    });
