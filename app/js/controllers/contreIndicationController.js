angular.module('app')

    .controller('ContreIndicationController', function($scope, FoodFactory) {

            $scope.foodList = FoodFactory;
            console.log($scope.foodList);

            $scope.arrayToString = function(string) {
              return string.join(", ");
            };

            // var arrayFoodList = Object.keys($scope.foodList).map(function (key) { return $scope.foodList[key]; });
            // console.log(arrayFoodList);

            // $scope.arrayFood = null;

            // $scope.cardslist = Object.keys($scope.foodList).map(function (key) { return $scope.foodList[key]; });
            // console.log($scope.cardslist);

            // var categories = Object.keys($scope.foodList);
            // $scope.currentCategorie = categories[0];
            // var i = 0;
            //
            //
            // $scope.suggestion = function () {
            //   for (i = 0; i < $scope.currentCategorie.length; i++) {
            //     i++;
            //     $scope.currentCategorie = categories[i];
            //   }
            // };



            // DATALIST SOLUTION
            $scope.counters = null;

          });
