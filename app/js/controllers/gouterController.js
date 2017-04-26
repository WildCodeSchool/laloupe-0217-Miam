angular.module('app')
    .controller('GouterController', function($scope) {
      $scope.likeOrNot = false;
      $scope.reessayer = true;

      $scope.reessayerAlim = function() {
        $scope.likeOrNot = false;
        $scope.reessayer = true;
      };

  });
