angular.module('app')
  .controller('ContreIndicationController', function($scope, $state, $filter, $interval, FoodFactory, LocalService, ContreIndicationService, Auth, CurrentUser) {

    $scope.foodList = FoodFactory;

    $scope.user = CurrentUser.user();
    console.log("User", $scope.user);

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

            if ($scope.query === nameAlim || $scope.query == compoAlim || $scope.query === nameCateg) {
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
      }
    };

    $scope.deselect = function($index) {
      $scope.items.splice($index, 1);
      console.log("Deselect one", $scope.items);
    };

    $scope.deselectAll = function() {
      $scope.items = [];
      console.log("Deselect all", $scope.items);
    };

    $scope.validate = function() {
      if ($scope.user.email !== undefined) {
        console.log("Database");
        for (var k = 0; k < $scope.items.length; k++) {
          ContreIndicationService.create($scope.items[k], $scope.user._id).then(function(res) {}, function(err) {});
        }
      } else {
        console.log("LocalStorage");
        LocalService.set("contreindication", JSON.stringify($scope.items)).then(function(res) {}, function(err) {});
        // $state.go('anon.manger');
      }
    };

  });
