angular.module('app')
    .controller('AvatarController', function($scope, AvatarFactory) {

        $scope.famille=AvatarFactory;
        console.log($scope.familles);

        var i = 0;

        var avatars = [
            {
                1: '/img/avatar.jpg',
                2: '/img/avatar1.2.jpg'
            },
            {
                1: '/img/avatar2.jpg',
                2: '/img/avatar1.2.jpg'
            }
        ];

        $scope.prev = function() {
            i--;

            if (i < 0) {
                i = avatars.length - 1;
            }
            $scope.currentAvatar = avatars[i][1];
        };

        $scope.next = function() {
            i++;

            if (i >= avatars.length) {
                i = 0;
            }
            $scope.currentAvatar = avatars[i][1];
        };

        $scope.currentAvatar = avatars[i][1];

    });
