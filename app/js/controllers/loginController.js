angular.module('app')
    .controller('LoginController', function($scope, $state, RememberMeService, Auth) {
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

                $scope.remember = false;
                if ($remember('email') && $remember('password')) {
                  $scope.remember = true;
                  $scope.user.email = $remember('email');
                  $scope.user.password = $remember('password');
                }
                $scope.rememberMe = function () {
                  if ($scope.remember) {
                    $remember('email', $scope.user.email);
                    $remember('password', $scope.user.password);
                  } else {
                    $remember('email', '');
                    $remember('password', '');
                  }
                };
            });
