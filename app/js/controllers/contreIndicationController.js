angular.module('app')
    .controller('ContreIndicationController', function($scope, $filter, $interval, FoodFactory) {

            $scope.foodList = FoodFactory;
            console.log($scope.foodList);

            $scope.arrayToString = function(string) {
              return string.join(", ");
            };

            // $scope.query = null;

            // TRIE ALIMENTS
            var i = 0;
            var j = 0;

            $scope.categories = Object.keys($scope.foodList);
            console.log("categories", $scope.categories);

            $scope.currentCategorie = $scope.categories[i];
            console.log("currentCategorie", $scope.currentCategorie);

            $scope.currentAliment = $scope.foodList[$scope.currentCategorie].aliments;
            console.log("currentAliment", $scope.currentAliment);

            $scope.items = [];

            $scope.query = "";

            $scope.addItem = function () {
              if($scope.query.length > 0) {
                $scope.foodList = $scope.currentAliment.filter(function(FoodFactory) {
                  for (i = 0; i < $scope.currentCategorie.length; i++) {
                    // $scope.currentCategorie = $scope.categories[i];
                    // for (j = 0; j < $scope.currentAliment.length; j++) {
                      var notEating = {
                        // categorie: ,
                        nameFood: $scope.currentAliment[j].name,
                        picto: $scope.currentAliment[j].picto,
                        doNotEat: true
                      };
                      $scope.items.push(notEating);
                      console.log("$scope.items", $scope.items);
                      $scope.query = "";
                    // }
                  }
                });
                // console.log("$scope.foodList", $scope.foodList);
              }
            };


            // if($scope.query == item.name) {};
            /*  var itemIndex = $scope.currentAliment.findIndex(function(item) {
                  return item.name == $scope.query;
                });
                console.log(itemIndex); */



            /* var selectItem = function() {
                if ($scope.query === $scope.categories.aliments) {
                  $scope.categories = $scope.categories.filter(function(aliment) {
                  console.log($scope.categories.aliments);
                  return $scope.categories.aliments;
                  });
                }
              }; */



            /* $scope.notEatingForDatabase = [];

            if ($scope.query === $scope.currentAliment) {
              var notEating = {
                nameFood: food.name,
                doNotEat: true,
              };
              $scope.notEatingForDatabase.push(notEating);
              console.log($scope.notEatingForDatabase);

              console.log("query", $scope.query);
              return $scope.currentAliment;
            } */

          });
