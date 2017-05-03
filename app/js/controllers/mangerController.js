angular.module('app')
    .controller('MangerController', function($scope, FoodFactory) {

$scope.categories = FoodFactory;
// var i;
// for (i = 0; i < fruit.length; i++) {
//   $scope.fruit = $scope.categories[0].fruits.aliments[i].name;
// }

  console.log($scope.categories[0]);
    console.log($scope.categories[0].fruits.categorie);

  });
