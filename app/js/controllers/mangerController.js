angular.module('app')
    .controller('MangerController', function($scope, mangerService) {

      $scope.aliments = [
        aliment = {
          categorie: $scope.aliments[categorie],
          nom: $scope.aliments[nom]
        }
      ];

        mangerService.findAll().then(function(res){
          $scope.aliments = res.data;

        }, function (err) {
          // oups
        });

    });
