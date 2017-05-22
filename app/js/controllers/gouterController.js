angular.module('app')
    .controller('GouterController', function($scope, FoodFactory, $location, $anchorScroll) {

      $scope.foodList = FoodFactory;
      console.log($scope.foodList);

      $scope.arrayToString = function(string) {
        return string.join(", ");
      };

      $scope.selectFood = function (foodname) {
        $scope.appearance = foodname
      }

      $scope.scrollTo = function () {
        $location.hash('_' + $scope.appearance);
        $anchorScroll();
      }
  });
