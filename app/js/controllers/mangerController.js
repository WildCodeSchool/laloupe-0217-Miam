angular.module('app')
    .controller('MangerController', function($scope, FoodFactory) {
      var i = 0;
      $scope.categories = FoodFactory;

      $scope.currentCategorie = $scope.categories[i].categorie;
      $scope.currentsAliments = $scope.categories[i].aliments;
      console.log($scope.currentsAliments);
      $scope.nextCategorie = function(){
        i++;
        $scope.currentCategorie = $scope.categories[i].categorie;
        $scope.currentsAliments = $scope.categories[i].aliments;

        console.log(i);
      };
      $scope.prevCategorie = function(){
        i--;
        $scope.currentCategorie = $scope.categories[i].categorie;
        $scope.currentsAliments = $scope.categories[i].aliments;
      };
  });
