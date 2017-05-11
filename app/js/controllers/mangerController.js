angular.module('app')
    .controller('MangerController', function($scope, FoodFactory, MangerService) {
        $scope.isActive = false;
        var isSelected = false;
        var i = 0;
        $scope.AlimentsEatens = [];
        $scope.categories = FoodFactory;

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
            return $scope.AlimentsEatens.map(function(aliment) {
                return aliment.nameFood;
            }).indexOf(food.name);
        };

        $scope.isSelected = function(food) {
            return foodIndex(food) != -1;
        };

        $scope.selectFood = function(food) {
            if ($scope.isSelected(food)) {
                $scope.AlimentsEatens.splice(foodIndex(food), 1);
            } else {
                var alreadyEaten = {
                    nameFood: food.name,
                    countVote: [true, true, true],
                };
                $scope.AlimentsEatens.push(alreadyEaten);
                console.log(alreadyEaten);
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
        $scope.selectAll = function() {

          if (isSelected === false) {
            $scope.AlimentsEatens = [];

              for (j = 0; j < $scope.currentsAliments.length; j++) {

                var alreadyEaten = {
                  nameFood: $scope.categories[i].aliments[j].name,
                  countVote: [true, true, true],
                };
                $scope.AlimentsEatens.push(alreadyEaten);
              }

            console.log($scope.AlimentsEatens);
            isSelected = true;
          }
          else {
            $scope.AlimentsEatens = [];
            isSelected = false;
            console.log($scope.AlimentsEatens);

          }
        };


    });
