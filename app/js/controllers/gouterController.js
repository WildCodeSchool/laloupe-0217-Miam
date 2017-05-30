angular.module('app')
    .controller('GouterController', function($scope, FoodFactory, $location, $anchorScroll) {

        $scope.foodList = FoodFactory;
        $scope.categories = Object.keys($scope.foodList);
        console.log($scope.foodList);

        var i = 0;
        var j = 0;

        $scope.arrayToString = function(string) {
            return string.join(", ");
        };

        $scope.selectFood = function(foodname) {
            $scope.appearance = foodname;
        };

        $scope.scrollTo = function() {
            $location.hash('_' + $scope.appearance);
            $anchorScroll();
        };

        $scope.like = function(foodName) {
            var like = {
                nameFood: foodName,
                countVote: [true],
            };
            console.log("like", like);
        };
        $scope.dislike = function(foodName) {
            var like = {
                nameFood: foodName,
                countVote: [false],
            };
            console.log("dislike", like);
        };
    });
