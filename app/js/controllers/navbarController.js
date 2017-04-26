angular.module('app')
    .controller('NavbarController', function($scope, Auth, CurrentUser) {
        $scope.isCollapsed = true;
        $scope.auth = Auth;
        $scope.user = CurrentUser.user();


        $scope.closeNav = function() {
            document.getElementById("myNav").style.width = "0%";
        };

        $scope.logout = function() {
            Auth.logout();

        };
    });
