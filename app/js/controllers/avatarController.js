angular.module('app')
    .controller('AvatarController', function($scope, AvatarFactory, CurrentUser, AvatarService, LocalService) {
        $scope.user = CurrentUser.user();

        var i = 0;
        $scope.avatars = AvatarFactory;

        $scope.prev = function() {
            i--;
            if (i < 0) {
                i = $scope.avatars.length - 1;
            }
            $scope.currentAvatar = $scope.avatars[i].avatars[0].picto;
        };
        $scope.next = function() {
            i++;
            if (i >= $scope.avatars.length) {
                i = 0;
            }
            $scope.currentAvatar = $scope.avatars[i].avatars[0].picto;
        };
        $scope.userName = "";


        $scope.profil = {
            id: $scope.user._id,
            userName: $scope.userName,
            nameAvatar: $scope.currentAvatar,
        };

        $scope.validProfil = function() {

            if ($scope.user.email !== undefined) {
                AvatarService.findOneAndUpdateProfil($scope.user._id, $scope.userName, $scope.currentAvatar).then(function(res) {

                }, function(err) {});
            } else {

                console.log("localStorage");
                console.log($scope.profil, $scope.user._id);
                LocalService.set("profil", JSON.stringify($scope.profil)).then(function(res) {
                    $state.go('anon.manger');

                }, function(err) {});
                $state.go('anon.manger');
            }

        };



    });
