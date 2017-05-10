angular.module('app')
    .controller('MangerController', function($scope, FoodFactory) {
        var i = 0;
        $scope.AlimentsEatens = [];
        $scope.categories = FoodFactory;



        $scope.currentCategorie = $scope.categories[i].categorie;
        $scope.currentsAliments = $scope.categories[i].aliments;
        console.log($scope.currentsAliments);
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


        $scope.myFunct = function(index) {
            console.log(index);
            var alreadyEaten = {
                nameFood: $scope.currentsAliments[index].name,
                countVote: [true, true, true],
            };
            $scope.AlimentsEatens.push(alreadyEaten);
            console.log(alreadyEaten);
            console.log($scope.AlimentsEatens);
        };


    });
