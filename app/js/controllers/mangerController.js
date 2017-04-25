angular.module('app')
    .controller('MangerController', function($scope, mangerService) {

      $scope.aliments = [];

        mangerService.findAll().then(function(res){
          $scope.aliments = res.data;
        }, function (err) {
          // oups
        });

    });
