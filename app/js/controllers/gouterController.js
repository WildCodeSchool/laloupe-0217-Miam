angular.module('app')
    .controller('GouterController', function($scope, FoodFactory) {

      $scope.categories = FoodFactory;
      console.log($scope.categories);

      $scope.arrayToString = function(string) {
        return string.join(", ");
      };
  });
