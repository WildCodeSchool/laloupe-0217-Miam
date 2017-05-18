angular.module('app')

    .controller('ContreIndicationController', function($scope, FoodFactory) {

            $scope.foodList = FoodFactory;
            console.log($scope.foodList);

            $scope.arrayToString = function(string) {
              return string.join(", ");
            };

            // $scope.counters = null;

            // var categories = ;
            $scope.currentCategorie = categorie[0];

            $scope.onInput = function() {
              var val = document.getElementById("input").value;
              // var opts = document.getElementById("counters").childNodes;
              // console.log(opts);
              for (var i = 0; i < val.length; i++) {
                if (val !== 0) {
                  console.log(val);
                  console.log($scope.foodList);
                  break;
                }
              }
            };

          });
