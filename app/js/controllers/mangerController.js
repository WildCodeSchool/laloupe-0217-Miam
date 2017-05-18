angular.module('app')
    .controller('MangerController', function($scope, FoodFactory) {

        $scope.foodList = FoodFactory;
        console.log($scope.foodList);
        console.log(Object.keys($scope.foodList));
        var categories = Object.keys($scope.foodList);
        var i = 0;
        $scope.filterLimit = 3;
        $scope.currentAliments = $scope.foodList;
        console.log($scope.currentAliments);
        $scope.currentCategorie = categories[0];


        $scope.nextCategorie = function() {
            if (i >= $scope.currentCategorie.length) {
                //Desable ng-click
            }
            i++;
            $scope.currentCategorie = categories[i];

        };

        $scope.prevCategorie = function() {
            if (i === 0) {
                //Desable ng-click
            }
            i--;
            $scope.currentCategorie = categories[i];

        };
    });
