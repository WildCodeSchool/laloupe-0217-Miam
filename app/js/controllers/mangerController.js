angular.module('app')
    .controller('MangerController', function($scope, FoodFactory, LocalService) {
        $scope.currentAlimsCount = 0;

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


        // function SelectedAll() {
        //     $scope.IsSelectedAll = $scope.currentAlimsCount === $scope.currentAliments.length;
        //   }

          $scope.IsSelectedAll = $scope.currentAlimsCount === $scope.currentAliments.length;


          console.log($scope.IsSelectedAll, $scope.currentAlimsCount, $scope.currentAliments.length);



        $scope.$watch(function() {
            $scope.currentAliments = $scope.foodList[$scope.currentCategorie].aliments;
          return $scope.currentCategorie;
        }, function() {
          $scope.IsSelectedAll = $scope.currentAlimsCount === $scope.currentAliments.length;
          console.log("apres chgt categorie", $scope.IsSelectedAll, '-- currentAliments.length',$scope.currentAliments.length, '-- currentAlimCount', $scope.currentAlimsCount);
        });
        $scope.$watch(function() {
            $scope.currentAliments = $scope.foodList[$scope.currentCategorie].aliments;
          return $scope.currentAlimsCount;
        }, function() {
          $scope.IsSelectedAll = $scope.currentAlimsCount === $scope.currentAliments.length;
          console.log("apres chgt alimCount", $scope.IsSelectedAll, '-- currentAliments.length',$scope.currentAliments.length, '-- currentAlimCount', $scope.currentAlimsCount);
        });

        $scope.isSelected = function(food) {
            return foodIndex(food) !== -1;
        };

        $scope.selectFood = function(food) {
            if ($scope.isSelected(food)) {
                $scope.alimentsForDatabase.splice(foodIndex(food), 1);
                $scope.currentAlimsCount--;
                console.log("delete single alimCount", $scope.IsSelectedAll, '-- currentAliments.length',$scope.currentAliments.length, '-- currentAlimCount', $scope.currentAlimsCount);


            } else {
                var alreadyEaten = {
                    categorie: $scope.currentCategorie,
                    nameFood: food.name,
                    countVote: [true, true, true],
                };
                $scope.alimentsForDatabase.push(alreadyEaten);
                $scope.currentAlimsCount++;
                console.log("add single alimCount", $scope.IsSelectedAll, '-- currentAliments.length',$scope.currentAliments.length, '-- currentAlimCount', $scope.currentAlimsCount);

            }
        };

        $scope.selectAll = function() {

        $scope.currentAlimsCount = 0;
            $scope.currentAliments = $scope.foodList[$scope.currentCategorie].aliments;
            for (j = 0; j < $scope.alimentsForDatabase.length; j++) {
                if ($scope.alimentsForDatabase[j].categorie === $scope.currentCategorie) {
                    $scope.currentAlimsCount++;
                }
            }
            if ($scope.currentAlimsCount === $scope.currentAliments.length) {
                $scope.alimentsForDatabase = $scope.alimentsForDatabase.filter(function(aliment) {
                  console.log($scope.IsSelectedAll, $scope.currentAlimsCount, $scope.currentAliments.length);

                    return aliment.categorie !== $scope.currentCategorie;
                });
            } else {
                $scope.alimentsForDatabase = $scope.alimentsForDatabase.filter(function(aliment) {

                    return aliment.categorie !== $scope.currentCategorie;
                });
                for (l = 0; l < $scope.currentAliments.length; l++) {
                    var alreadyEaten = {
                        categorie: $scope.currentCategorie,
                        nameFood: $scope.currentAliments[l].name,
                        countVote: [true, true, true],
                    };

                    $scope.alimentsForDatabase.push(alreadyEaten);
                }
                console.log("selectAll", $scope.IsSelectedAll, $scope.currentAlimsCount, $scope.currentAliments.length);

            }
        };

        $scope.validCategorie = function() {
            i++;
            $scope.currentCategorie = $scope.categories[i];
            console.log(i);
        };


        $scope.nextCategorie = function() {

            if (i >= $scope.categories.length) {
              i++;

                console.log("if", i);
            }
            else if (i === $scope.categories.length-1){
              $scope.limitNext = true;
              i++;
              console.log("else if", i);
            }
            else {
              $scope.limitNext = false;
              i++;
                $scope.currentCategorie = $scope.categories[i];
                console.log("else", i);
            }
        };

        $scope.prevCategorie = function() {
            if (i <= 0) {
                return false;
            }
            else {
            i--;
              $scope.limitNext = false;
            $scope.currentCategorie = $scope.categories[i];
            return true;
          }
        };

        $scope.ok = function () {
          LocalService.set(JSON.stringify($scope.alimentsForDatabase)).then(function(res) {

                  }, function(err) {});

        };

        $scope.set_color = function(currentcatsymbol) {
            if ($scope.currentCategorie) {
                return {
                    color: "bleu"
                };
            }
        };
    });
