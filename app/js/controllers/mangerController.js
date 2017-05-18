angular.module('app')
    .controller('MangerController', function($scope, FoodFactory) {

        $scope.foodList = FoodFactory;
        console.log($scope.foodList);
        console.log(Object.keys($scope.foodList));
        var categories = Object.keys($scope.foodList);
        var i = 0;
        var j = 0;
        var k = 0;
        $scope.filterLimit = 3;
        $scope.currentCategorie = categories[0];
        $scope.currentAliments = $scope.foodList[$scope.currentCategorie].aliments;
        console.log($scope.currentAliments);
        $scope.alimentsForDatabase = [];

        var foodIndex = function(food) {
            return $scope.alimentsForDatabase.map(function(aliment) {
                return aliment.nameFood;
            }).indexOf(food.name);
        };

        $scope.isSelected = function(food) {
            return foodIndex(food) != -1;
        };

        $scope.selectFood = function(food) {
            if ($scope.isSelected(food)) {
                $scope.alimentsForDatabase.splice(foodIndex(food), 1);
                console.log($scope.alimentsForDatabase);
                console.log(foodIndex(food));
            } else {
                var alreadyEaten = {
                    nameFood: food.name,
                    countVote: [true, true, true],
                };
                $scope.alimentsForDatabase.push(alreadyEaten);
                console.log($scope.alimentsForDatabase);
            }
        };


        // $scope.selectFood = function(food) {
        //
        //     var alreadyEaten = {
        //         nameFood: food.name,
        //         countVote: [true, true, true],
        //     };
        //     console.log($scope.alimentsForDatabase.length);
        //
        //     if ($scope.alimentsForDatabase.length === 0) {
        //         $scope.alimentsForDatabase.push(alreadyEaten);
        //         console.log("add === 0", $scope.alimentsForDatabase);
        //     } else {
        //         for (j = 0; j < $scope.alimentsForDatabase.length; j++) {
        //             if (food.name === $scope.alimentsForDatabase[j].nameFood) {
        //               $scope.alimentsForDatabase.splice($scope.alimentsForDatabase[j], 1);
        //               console.log("deleted", $scope.alimentsForDatabase);
        //             } else {
        //               $scope.alimentsForDatabase.push(alreadyEaten);
        //               console.log("add in loop", $scope.alimentsForDatabase);
        //             }
        //         }
        //     }
        // };


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
