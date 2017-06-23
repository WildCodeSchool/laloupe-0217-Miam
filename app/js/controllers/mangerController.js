angular.module('app')
.controller('MangerController', function($scope, $state, FoodFactory, LocalService, Auth, MangerService, CurrentUser) {

        // SIMPLIFY FOOD NAMES
        $scope.underscore = function(string) {
          return string.replace(/[_]/g, " ");
        };

        $scope.currentAlimsCount = 0;
        $scope.user = CurrentUser.user();
        $scope.foodList = FoodFactory;
        $scope.limitNext = false;
        $scope.limitPrev = true;
        $scope.categories = Object.keys($scope.foodList);
        var i = 0;
        var j = 0;
        console.log("$scope.user", $scope.user);
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

        $scope.$watch(function() {
            $scope.currentAliments = $scope.foodList[$scope.currentCategorie].aliments;
            return $scope.currentCategorie;
        }, function() {
            $scope.IsSelectedAll = $scope.currentAlimsCount === $scope.currentAliments.length;
        });
        $scope.$watch(function() {
            $scope.currentAliments = $scope.foodList[$scope.currentCategorie].aliments;
            return $scope.currentAlimsCount;
        }, function() {
            $scope.IsSelectedAll = $scope.currentAlimsCount === $scope.currentAliments.length;
        });

        $scope.isSelected = function(food) {
            return foodIndex(food) !== -1;
        };

        $scope.selectFood = function(food) {
            if ($scope.isSelected(food)) {
                $scope.alimentsForDatabase.splice(foodIndex(food), 1);
                $scope.currentAlimsCount--;


            } else {
                var alreadyEaten = {
                    categorie: $scope.currentCategorie,
                    nameFood: food.name,
                    countVote: [true, true, true],
                };
                $scope.alimentsForDatabase.push(alreadyEaten);
                $scope.currentAlimsCount++;
                console.log(Auth);

            }
        };

        $scope.selectAll = function() {

            $scope.currentAlimsCount = $scope.alimentsForDatabase.filter(function(aliment) {
                return aliment.categorie === $scope.currentCategorie;
            }).length;
            //     $scope.currentAliments = $scope.foodList[$scope.currentCategorie].aliments;
            //     for (j = 0; j < $scope.alimentsForDatabase.length; j++) {
            //         if ($scope.alimentsForDatabase[j].categorie === $scope.currentCategorie) {
            //             $scope.currentAlimsCount++;
            //         }
            // }

            if ($scope.currentAlimsCount === $scope.currentAliments.length) {
                $scope.alimentsForDatabase = $scope.alimentsForDatabase.filter(function(aliment) {

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

            }
        };

        $scope.validCategorie = function() {
            i++;
            $scope.currentCategorie = $scope.categories[i];
        };


        $scope.nextCategorie = function() {

            if (i >= $scope.categories.length) {
                i++;

            } else if (i === $scope.categories.length - 1) {
                $scope.limitNext = true;
                i++;
            } else {
                $scope.limitNext = false;
                i++;
                $scope.currentCategorie = $scope.categories[i];
            }
        };

        $scope.prevCategorie = function() {
            if (i <= 0) {
                return false;
            } else {
                i--;
                $scope.limitNext = false;
                $scope.currentCategorie = $scope.categories[i];
                return true;
            }
        };

        $scope.ok = function() {

            if ($scope.user.email !== undefined) {


                console.log("dataBase");
                for (var j = 0; j < $scope.alimentsForDatabase.length; j++) {

                    MangerService.create($scope.alimentsForDatabase[j], $scope.user._id).then(function(res) {

                    }, function(err) {});
                    $state.go('anon.contreIndication');
                }
            } else {
                console.log("localStorage");
                LocalService.set("jeMangeDeja", JSON.stringify($scope.alimentsForDatabase)).then(function(res) {
                  $state.go('anon.contreIndication');

                }, function(err) {});
                $state.go('anon.contreIndication');
            }
        };

        $scope.set_color = function(currentcatsymbol) {
            if ($scope.currentCategorie) {
                return {
                    color: "bleu"
                };
            }
        };
    });
