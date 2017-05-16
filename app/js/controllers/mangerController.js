angular.module('app')
    .controller('MangerController', function($scope, FoodFactory, MangerService) {
        $scope.isActive = false;
        var isSelected = false;
        var selectedCat = false;
        var i = 0;
        $scope.alimentsForDataBase = [];
        $scope.AlimentsInCat = [];
        $scope.categories = FoodFactory;

        var readyToAdd = true;
        var countAlimSelected = 0;
        for (var m = 0; m < $scope.alimentsForDataBase.length; m++) {
            if ($scope.alimentsForDataBase[m].categorie === $scope.currentCategorie) {
                countAlimSelected = countAlimSelected + 1;

            }
            if ($scope.currentCategorie.length != countAlimSelected || $scope.alimentsForDataBase.length === 0) {
                readyToAdd = false;
            }
        }




        $scope.currentCategorie = $scope.categories[i].categorie;
        $scope.currentsAliments = $scope.categories[i].aliments;
        $scope.nextCategorie = function() {
            i++;
            $scope.currentCategorie = $scope.categories[i].categorie;
            $scope.currentsAliments = $scope.categories[i].aliments;
        };

        $scope.prevCategorie = function() {
            i--;
            $scope.currentCategorie = $scope.categories[i].categorie;
            $scope.currentsAliments = $scope.categories[i].aliments;
        };

        var foodIndex = function(food) {
            return $scope.alimentsForDataBase.map(function(aliment) {
                return aliment.nameFood;
            }).indexOf(food.name);
        };
        $scope.isSelected = function(food) {
            return foodIndex(food) != -1;
        };

        $scope.selectFood = function(food) {
            if ($scope.isSelected(food)) {
                $scope.alimentsForDataBase.splice(foodIndex(food), 1);
            } else {
                var alreadyEaten = {
                    categorie: $scope.currentCategorie,
                    nameFood: food.name,
                    countVote: [true, true, true],
                };
                $scope.alimentsForDataBase.push(alreadyEaten);
                console.log(countAlimSelected);
                console.log($scope.alimentsForDataBase[m].categorie);
                console.log($scope.currentCategorie);
            }
        };
        var categorieIndex = function(categorie) {
            return $scope.alimentsForDataBase.map(function(aliment) {
                return aliment.nameFood;
            }).indexOf(food.name);
        };
        $scope.isSelected = function(food) {
            return foodIndex(food) != -1;
        };

        $scope.selectAll = function() {
            if (readyToAdd === true) {
                for (var j = 0; j < $scope.currentsAliments.length; j++) {
                    for (var l = 0; l < $scope.alimentsForDataBase.length; l++) {
                        if ($scope.alimentsForDataBase[l].nameFood === $scope.currentsAliments[j].name) {
                            $scope.alimentsForDataBase.splice($scope.currentsAliments[j].name);
                        }
                    }
                    var alreadyEaten = {
                        categorie: $scope.currentCategorie,
                        nameFood: $scope.categories[i].aliments[j].name,
                        countVote: [true, true, true],
                    };
                    $scope.alimentsForDataBase.push(alreadyEaten);
                    console.log("add", $scope.alimentsForDataBase);

                }
            } else {
                for (var k = 0; k < $scope.alimentsForDataBase.length; k++) {
                    if ($scope.currentCategorie === $scope.alimentsForDataBase[k].categorie) {
                        $scope.alimentsForDataBase.splice($scope.alimentsForDataBase[k]);
                        console.log("delete", $scope.alimentsForDataBase);
                    }
                }
            }
        };

        $scope.validCategorie = function() {
            if (i < $scope.categories.length) {
                i++;
                $scope.currentCategorie = $scope.categories[i].categorie;
                $scope.currentsAliments = $scope.categories[i].aliments;
            } else {
                MangerService.create(nameFood, countVote).then(function(res) {
                    $state.go('anon.gouter');
                }, function(err) {});
                $state.go('anon.gouter');
            }
        };

    });
