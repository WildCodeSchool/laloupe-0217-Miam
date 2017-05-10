angular.module('app')
    .controller('MangerController', function($scope, FoodFactory) {
        var i = 0;
        $scope.AlimentsEatens = [];
        var AlimentsEatens = $scope.AlimentsEatens;
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

        $scope.myFunct = function(food) {
          var foodIndex = $scope.AlimentsEatens.map(
            function(aliment){return aliment.nameFood;}
          ).indexOf(food.name);
          if(foodIndex != -1) {
            $scope.AlimentsEatens.splice(foodIndex, 1);
          } else {
            var alreadyEaten = {
                nameFood: food.name,
                countVote: [true, true, true],
              };
              $scope.AlimentsEatens.push(alreadyEaten);
          }

          console.log($scope.AlimentsEatens);
        };


    });
