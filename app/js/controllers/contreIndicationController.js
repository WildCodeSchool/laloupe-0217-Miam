angular.module('app')

    .controller('ContreIndicationController', function($scope, FoodFactory) {

            $scope.foodList = FoodFactory;
            console.log($scope.foodList);

            $scope.arrayToString = function(string) {
              return string.join(", ");
            };

            // $scope.counters = null;

          });
