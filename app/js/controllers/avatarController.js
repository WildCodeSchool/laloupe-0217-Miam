angular.module('app')
    .controller('AvatarController', function($scope, AvatarFactory) {

        $scope.familles = AvatarFactory;
        console.log($scope.familles);

        var i = 0;

        var avatars = [
            {
                1: '/img/penguin.svg',
                2: '/img/avatar1.2.jpg'
            },
            {
                1: '/img/miam-logo.svg',
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
