angular.module('app')
    .controller('AvatarController', function($scope, AvatarFactory, CurrentUser, AvatarService) {
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

$scope.validProfil = function(){

AvatarService.findOneAndUpdateProfil($scope.user._id, $scope.userName, $scope.currentAvatar).then(function(res) {

}, function(err) {});


};

    });
