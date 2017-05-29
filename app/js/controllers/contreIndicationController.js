angular.module('app')
    .controller('ContreIndicationController', function($scope, $filter, $interval, FoodFactory) {

            $scope.foodList = FoodFactory;
            console.log($scope.foodList);

            // SIMPLIFY FOOD NAMES
            $scope.arrayToString = function(string) {
              return string.join("");
            };
            $scope.regAccent = function (string) {
              return string.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
            };
            $scope.correct = function (string) {
              return $scope.regAccent(string);
            };


            // FILTER FOOD
            var i = 0;
            var j = 0;

            $scope.categories = Object.keys($scope.foodList);

            $scope.items = [];

            $scope.query = "";

            $scope.addItem = function() {
              if($scope.query.length > 0) {

                for (i = 0; i < $scope.categories.length; i++) {

                    var accessAliments = $scope.foodList[$scope.categories[i]].aliments;

                    var allNames = _.map(accessAliments, "name");
                    var compoAlim = _.map(accessAliments, "composition");
                    var nameCateg = $scope.categories[i];

                    for (var j = 0; j < allNames.length; j++) {
                      var nameAlim = allNames[j];
                      // console.log(nameAlim);

                      if ($scope.query == nameAlim || $scope.query == compoAlim || $scope.query == nameCateg) {
                        var alimNotEating = {
                          categorie: nameCateg,
                          nameFood: nameAlim,
                          compoFood: compoAlim,
                          doNotEat: true
                        };
                        $scope.items.push(alimNotEating);
                        console.log("$scope.items", $scope.items);
                      }
                  }
                }
                $scope.query = "";

                  // var newArray=[];
                  // newArray.push(nameAlim);
                  // console.log("newArray", newArray);

                  // for (var k = 1; k < $scope.categories.length; k++) {
                  //       nameAlim.push(k);
                  //       nameAlimFull.push(nameAlim.slice(0));
                  //   }
                  // console.log(nameAlimFull);



                // var testNameAlim = function () {
                //   var nameAlimFull = [];
                //   // for (var k = 0; k < $scope.categories.length; k++) {
                //   //   nameAlim.push(k);
                //   //   nameAlimFull.push(nameAlim.concat());
                //   // }
                //   for (var k = 1; k < $scope.categories.length; k++) {
                //       nameAlim.push(k);
                //       nameAlimFull.push(nameAlim.slice(0));
                //   }
                //   console.log("nameAlimFull", nameAlimFull);
                // };







                //
                // function test() {
                //     var sub_array = [];
                //     var super_array = [];
                //     for (var i = 1; i <= 3; i++) {
                //         sub_array.push(i);
                //         super_array.push(sub_array.concat());
                //     }
                //     alert(super_array);
                // }

              }
            };



            // $scope.addItem = function () {
              // if($scope.query.length > 0) {
                // $scope.foodList = $scope.currentAliment.filter(function(FoodFactory) {
                //   for (i = 0; i < $scope.currentCategorie.length; i++) {
                //     // $scope.currentCategorie = $scope.categories[i];
                //     // for (j = 0; j < $scope.currentAliment.length; j++) {
                //       var notEating = {
                //         // categorie: ,
                //         nameFood: $scope.currentAliment[j].name,
                //         picto: $scope.currentAliment[j].picto,
                //         doNotEat: true
                //       };
                //       $scope.items.push(notEating);
                //       console.log("$scope.items", $scope.items);
                //       $scope.query = "";
                //     // }
                  // }
                // };
                // console.log("$scope.foodList", $scope.foodList);
              // });
            // }


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
