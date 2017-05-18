angular.module('app')
    .controller('MangerController', function($scope, FoodFactory) {

        $scope.foodList = FoodFactory;
        console.log($scope.foodList);
        console.log(Object.keys($scope.foodList));
        $scope.limitNext = false;
        $scope.limitPrev = true;
        var categories = Object.keys($scope.foodList);
        var i = 0;
        var j = 0;
        var k = 0;
        var l = 0;
        $scope.filterLimit = 3;
        $scope.currentCategorie = categories[i];
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
            } else {
                var alreadyEaten = {
                    categorie: $scope.currentCategorie,
                    nameFood: food.name,
                    countVote: [true, true, true],
                };
                $scope.alimentsForDatabase.push(alreadyEaten);
                console.log($scope.alimentsForDatabase);
            }
        };
        $scope.selectAll = function() {
            $scope.currentAliments = $scope.foodList[$scope.currentCategorie].aliments;
            var currentAlimsCount = 0;
            for (j = 0; j < $scope.alimentsForDatabase.length; j++) {
                if ($scope.alimentsForDatabase[j].categorie === $scope.currentCategorie) {
                    currentAlimsCount++;
                }
            }
            if (currentAlimsCount === $scope.currentAliments.length) {
                $scope.alimentsForDatabase = $scope.alimentsForDatabase.filter(function(aliment) {
                    return aliment.categorie != $scope.currentCategorie;
                });
            } else {
                $scope.alimentsForDatabase = $scope.alimentsForDatabase.filter(function(aliment) {
                    return aliment.categorie != $scope.currentCategorie;
                });
                for (l = 0; l < $scope.currentAliments.length; l++) {
                    var alreadyEaten = {
                        categorie: $scope.currentCategorie,
                        nameFood: $scope.currentAliments[l].name,
                        countVote: [true, true, true],
                    };
                    $scope.alimentsForDatabase.push(alreadyEaten);
                    console.log("add", $scope.alimentsForDatabase);

                }
            }
        };

        $scope.validCategorie = function() {
          if (i >= categories.length-1) {
            console.log("send");
          }
            i++;
            $scope.currentCategorie = categories[i];
            console.log(i);
        };


        $scope.nextCategorie = function() {
            console.log($scope.limitNext);
            if (i >= categories.length-1) {
                $scope.limitNext = true;
            }
            i++;
            $scope.currentCategorie = categories[i];

        };

        $scope.prevCategorie = function() {
            console.log($scope.limitPrev);
            if (i === 0) {
                $scope.limiPrev = true;
            }
            i--;
            $scope.currentCategorie = categories[i];

        };
    });
