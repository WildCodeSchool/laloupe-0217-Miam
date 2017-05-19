angular.module('app')
    .controller('MangerController', function($scope, FoodFactory) {
      var currentAlimsCount=0;

        $scope.foodList = FoodFactory;
        $scope.limitNext = false;
        $scope.limitPrev = true;
        $scope.categories = Object.keys($scope.foodList);
        var i = 0;
        var j = 0;
        var k = 0;
        var l = 0;
        $scope.filterLimit = 3;
        $scope.currentCategorie = $scope.categories[i];
        $scope.currentAliments = $scope.foodList[$scope.currentCategorie].aliments;
        $scope.alimentsForDatabase = [];

        var foodIndex = function(food) {
            return $scope.alimentsForDatabase.map(function(aliment) {
                return aliment.nameFood;
            }).indexOf(food.name);
        };



        var init = function () {
          if (currentAlimsCount !== $scope.currentAliments.length) {
            $scope.showSelectAll = false;
            $scope.showUnSelectAll = true;
            console.log("unselected");
          }
          else {
            $scope.showSelectAll = true;
            $scope.showUnSelectAll = false;
            console.log("selected");
          }

        };

    init();

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
          init();
          currentAlimsCount=0;
            $scope.currentAliments = $scope.foodList[$scope.currentCategorie].aliments;
            for (j = 0; j < $scope.alimentsForDatabase.length; j++) {
                if ($scope.alimentsForDatabase[j].categorie === $scope.currentCategorie) {
                    currentAlimsCount++;
                    console.log(currentAlimsCount);
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
                    console.log(currentAlimsCount);
                }
            }
        };


        $scope.validCategorie = function() {
            i++;
            $scope.currentCategorie = $scope.categories[i];
            console.log(i);
        };


        $scope.nextCategorie = function() {
init();
          if (i>= $scope.categories.length - 1) {
            return true;
          }
            i++;
            $scope.currentCategorie = $scope.categories[i];
            return false;

        };

        $scope.prevCategorie = function() {
init();
            if (i <= 0) {
                return true;
            }
            i--;
            $scope.currentCategorie = $scope.categories[i];
            return false;
        };

        $scope.set_color = function (currentcatsymbol) {
          if ($scope.currentCategorie) {
            return { color: "bleu" };
          }
        };

    });
