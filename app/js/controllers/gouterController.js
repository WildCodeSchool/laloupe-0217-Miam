angular.module('app')
    .controller('GouterController', function($scope, FoodFactory) {

      // $scope.categories = FoodFactory;
      $scope.foodList = FoodFactory;
      console.log($scope.foodList);



      $scope.arrayToString = function(string) {
        return string.join(", ");
      };
  });
