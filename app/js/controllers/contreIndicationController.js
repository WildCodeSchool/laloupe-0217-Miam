angular.module('app')

    .controller('ContreIndicationController', function($scope, $stateParams, FoodFactory) {

            $scope.foodList = FoodFactory;
            console.log($scope.foodList);

            $scope.arrayToString = function(string) {
              return string.join(", ");
            };

            // $scope.counterSearch = null;

            // TRIE ALIMENTS
            var i = 0;
            var j = 0;

            $scope.categories = Object.keys($scope.foodList);
            $scope.currentCategorie = $scope.categories[i];

            $scope.currentAliment = $scope.foodList[$scope.currentCategorie].aliments;

            console.log("categories", $scope.categories);
            console.log("currentCategorie", $scope.currentCategorie);
            console.log("currentAliment", $scope.currentAliment);

            $scope.counterSearch = "";

            // $scope.notEatingForDatabase = [];
            //
            // if ($scope.counterSearch === $scope.currentAliment) {
            //   var notEating = {
            //     nameFood: food.name,
            //     doNotEat: true,
            //   };
            //   $scope.notEatingForDatabase.push(notEating);
            //   console.log($scope.notEatingForDatabase);
            //
            //   console.log("counterSearch", $scope.counterSearch);
            //   return $scope.currentAliment;
            // }

            







            // $scope.counterSearch = $stateParams.counterSearch;
            // console.log("$scope.counterSearch");
            //
            //
            // var selectItem = function() {
            //   console.log("$scope.counterSearch");
            // };


            // var selectItem = function() {
            //
            //   if ($scope.counterSearch === $scope.categories.aliments) {
            //     $scope.categories = $scope.categories.filter(function(aliment) {
            //       console.log($scope.categories.aliments);
            //       return $scope.categories.aliments;
            //     });
            //   }
            // };










            // $scope.notEatingForDatabase = [];
            //
            // var foodIndex = function(food) {
            //     return $scope.notEatingForDatabase.map(function(aliment) {
            //         return aliment.nameFood;
            //     }).indexOf(food.name);
            // };
            //
            //
            // $scope.isChosen = function(food) {
            //     return foodIndex(food) != -1;
            // };
            //
            //
            // $scope.selectItem = function(food) {
            //     if ($scope.isChosen(food)) {
            //         $scope.notEatingForDatabase.splice(foodIndex(food), 1);
            //         console.log($scope.notEatingForDatabase);
            //     } else {
            //         var notEating = {
            //             nameFood: food.name,
            //             doNotEat: true,
            //         };
            //         $scope.notEatingForDatabase.push(notEating);
            //         console.log($scope.notEatingForDatabase);
            //     }
            // };













            // $scope.selectItem = function() {
            //   var alim = document.getElementById("input").value;
            //   console.log("Alim départ", alim);
            //   // var opts = document.getElementById("counterSearchs").childNodes;
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
