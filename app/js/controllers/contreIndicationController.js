angular.module('app').controller('ContreIndicationController', function($scope, $state, $filter, $interval, FoodFactory, AvatarFactory, LocalService, ContreIndicationService, Auth, CurrentUser, ProfilService) {

  $scope.foodList = FoodFactory;

  $scope.user = CurrentUser.user();

  // SIMPLIFY FOOD NAMES
  $scope.arrayToString = function(string) {
    return string.join("");
  };
  $scope.underscore = function(string) {
    return string.replace(/[_]/g, " ");
  };
  $scope.regAccent = function(string) {
    return string.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
  };
  $scope.correct = function(string) {
    return $scope.regAccent(string);
  };

  // FILTER FOOD
  var i = 0;
  var j = 0;
  var k = 0;

  $scope.categories = Object.keys($scope.foodList);

  $scope.items = [];

  $scope.query = "";

  $scope.addItem = function() {
    if ($scope.query.length > 0) {
      for (i = 0; i < $scope.categories.length; i++) {
        var accessAliments = $scope.foodList[$scope.categories[i]].aliments;
        var allNames = _.map(accessAliments, "name");
        var allCompo = _.map(accessAliments, "composition");
        var nameCateg = $scope.categories[i];
        for (var j = 0; j < allNames.length; j++) {
          var nameAlim = allNames[j];
          var compoAlim = allCompo[j];
          if ($scope.query === nameAlim || String($scope.query) === String(compoAlim) || $scope.query === nameCateg) {
            var alimNotEating = {
              categorie: nameCateg,
              nameFood: nameAlim,
              compoFood: compoAlim,
              doNotEat: true
            };
            var indexNameAlim = $scope.items.map(function(item) {
              return item.nameFood;
            }).indexOf(nameAlim);
            if (indexNameAlim === -1) {
              $scope.items.push(alimNotEating);
            } else {
              $scope.items.splice(indexNameAlim, 0);
            }
          }
        }
      }
      $scope.query = "";
    }
  };

  $scope.deselect = function($index) {
    $scope.items.splice($index, 1);
  };

  $scope.deselectAll = function() {
    $scope.items = [];
  };

  // CONTRAINDICATION BY PROFILE
  $scope.profile = "";
  ProfilService.getAll().then(function(res) {
    var data = res.data;
    for (var i = 0; i < data.length; i++) {
      if (res.data[i].isCurrentProfil === true) {
        $scope.profile += res.data[i]._id;
      }
    }
    $scope.validate = function() {
      if ($scope.user.email !== undefined) {
        for (var k = 0; k < $scope.items.length; k++) {
          ContreIndicationService.notEating($scope.items[k], $scope.profile);
        }
        $state.go('anon.manger');
      } else {
        LocalService.set("contreindication", JSON.stringify($scope.items));
        $state.go('anon.manger');
      }
    };
  });

});
