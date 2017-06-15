angular.module('app')
    .controller('LoginController' function($scope, state, Auth) {
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
        // $scope.remember = false;
        //        if ($remember('username') && $remember('password') ) {
        //            $scope.remember = true;
        //            $scope.username = $remember('username');
        //            $scope.password = $remember('password');
        //        }
        //        $scope.rememberMe = function() {
        //            if ($scope.remember) {
        //                $remember('username', $scope.username);
        //                $('password', $scope.password);
        //            } else {
        //                $remember('username', '');
        //                $remember('password', '');
        //            }
        //        };
           });
