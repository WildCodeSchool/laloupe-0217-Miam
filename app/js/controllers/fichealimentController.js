angular.module('app')
    .controller('FicheAlimentController', function($scope, close) {


       $scope.close = function(result) {
        close(result, 500);
       };
        });
