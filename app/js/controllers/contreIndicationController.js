angular.module('app')

    .controller('ContreIndicationController', function($scope, FoodFactory) {

            $scope.foodList = FoodFactory;
            console.log($scope.foodList);

            $scope.arrayToString = function(string) {
              return string.join(", ");
            };

            // $scope.counters = null;

            // TRIE ALIMENTS
            var i = 0;
            var j = 0;

            $scope.categories = Object.keys($scope.foodList);
            $scope.currentCategorie = $scope.categories[i];

            $scope.currentAliment = $scope.foodList[$scope.currentCategorie].aliments;

            console.log("categories", $scope.categories);
            console.log("currentCategorie", $scope.currentCategorie);
            console.log("currentAliment", $scope.currentAliment);


            $scope.alimentsForDatabase = [];

            var foodIndex = function(food) {
                return $scope.alimentsForDatabase.map(function(aliment) {
                    return aliment.nameFood;
                }).indexOf(food.name);
            };


            $scope.isChosen = function(food) {
                return foodIndex(food) != -1;
            };


            $scope.selectItem = function(food) {
                if ($scope.isChosen(food)) {
                    $scope.alimentsForDatabase.splice(foodIndex(food), 1);
                    console.log($scope.alimentsForDatabase);
                } else {
                    var notEating = {
                        nameFood: food.name,
                        doNotEat: true,
                    };
                    $scope.alimentsForDatabase.push(notEating);
                    console.log($scope.alimentsForDatabase);
                }
            };













            // $scope.selectItem = function() {
            //   var alim = document.getElementById("input").value;
            //   console.log("Alim départ", alim);
            //   // var opts = document.getElementById("counters").childNodes;
            //   // console.log(opts);
            //   for (var i = 0; i < alim.length; i++) {
            //     if (alim === $scope.currentAliment) {
            //       console.log("Alim1", alim);
            //       console.log("currentAliment1", $scope.currentAliment);
            //       break;
            //     } else {
            //       //
            //     }
            //   }
            //   for (var j = 0; j < alim.length; j++) {
            //     if (alim === 0) {
            //       console.log("Alim2", alim);
            //       console.log("currentAliment2", $scope.currentAliment);
            //       break;
            //     }
            //   }
            // };

          });
