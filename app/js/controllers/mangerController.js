angular.module('app')
    .controller('MangerController', function($scope, FoodFactory) {

$scope.categories = FoodFactory;

  console.log($scope.categories);
  console.log($scope.categories.feculents);
            // FoodFactory.get().then(function(res) {
            //         $scope.food = (res.data); console.log($scope.food);
            //         $scope.categories.push($scope.food);

            });
