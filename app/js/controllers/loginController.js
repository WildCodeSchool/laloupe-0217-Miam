angular.module('app')
    .controller('LoginController', function($scope, state, ngCookies, rememberMeService, Base64, Auth) {
        $scope.errors = [];

        $scope.login = function() {
            if ($scope.loginForm.$valid) {
                $scope.errors = [];
                Auth.login($scope.user).then(function(result) {
                    $state.go('anon.gouter');
                }).catch(function(err) {
                    $scope.errors.push(err);
                });
            }
        };

        self = this;

        if (rememberMeService('7ZXYZ@L') && rememberMeService('UU@#90')) {
            self.user.email = Base64.decode(rememberMeService('7ZXYZ@L'));
            self.user.password = Base64.decode(rememberMeService('UU@#90'));
        }
        self.rememberMe = function() {
            if (self.remember) {

                rememberMeService('7ZXYZ@L', Base64.encode(self.user.email));
                rememberMeService('UU@#90', Base64.encode(self.user.password));
            } else {
                rememberMeService('7ZXYZ@L', '');
                rememberMeService('UU@#90', '');
            }
        };
    });
