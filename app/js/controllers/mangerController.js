angular.module('app')
    .controller('MangerController', function($scope, FoodFactory, MangerService) {
        $scope.isActive = false;
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

        var foodIndex = function (food) {
          return $scope.AlimentsEatens.map(function(aliment) {return aliment.nameFood;}).indexOf(food.name);
        };

        $scope.isSelected = function (food) {
          return foodIndex(food) != -1;
        };

        $scope.selectFood = function(food) {
          // element.all(by.repeater('food in currentsAliments')).get(index).click();

            if ($scope.isSelected(food)) {
                $scope.AlimentsEatens.splice(foodIndex(food), 1);
            } else {
                var alreadyEaten = {
                    nameFood: food.name,
                    countVote: [true, true, true],
                };
                $scope.AlimentsEatens.push(alreadyEaten);
            }
        };

        $scope.validCategorie = function() {
          if (i<$scope.categories.length) {
            i++;
            $scope.currentCategorie = $scope.categories[i].categorie;
            $scope.currentsAliments = $scope.categories[i].aliments;
          }
          else {
            MangerService.create(nameFood, countVote).then(function(res){
              $state.go('anon.gouter');
            }, function(err){});
              $state.go('anon.gouter');
          }
        };


        console.log($scope.AlimentsEatens);

    });
