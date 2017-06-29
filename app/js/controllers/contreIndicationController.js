angular.module('app')
  .controller('ContreIndicationController', function($scope, $state, $filter, $interval, FoodFactory, AvatarFactory, LocalService, ContreIndicationService, Auth, CurrentUser, ProfilService) {

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

              var indexNameAlim = $scope.items.map(function(item) {
                return item.nameFood;
              }).indexOf(nameAlim);

              if (indexNameAlim === -1) {
                $scope.items.push(alimNotEating);
                console.log("Push", $scope.items);
              } else {
                $scope.items.splice(indexNameAlim, 0);
                console.log("Splice", $scope.items);
              }

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

    // PROFIL SERVICE
    // $scope.avatars = AvatarFactory;
    // ProfilService.getAll().then(function(res) {
    //     var data = res.data[0];
    //     for (var i = 0; i < data.profil.length; i++) {
    //         $scope.avatars.push(data.profil[i]);
    //     }
    //     data.profil.forEach(function(el){
    //       if(el.isCurrentProfil){
    //         $scope.currentProfilId = el._id;
    //         $scope.validate = function() {
    //           if ($scope.user.email !== undefined) {
    //             console.log("Database");
    //             for (var k = 0; k < $scope.items.length; k++) {
    //               ContreIndicationService.notEating($scope.items[k], $scope.user._id, $scope.currentProfilId).then(function(res) {}, function(err) {});
    //             }
    //             console.log("$scope.currentProfilId", $scope.currentProfilId);
    //             console.log("data", data);
    //             // $state.go('anon.manger');
    //           } else {
    //             console.log("LocalStorage");
    //             LocalService.set("contreindication", JSON.stringify($scope.items)).then(function(res) {}, function(err) {});
    //             $state.go('anon.manger');
    //           }
    //         };
    //       }
    //     });
    // });

  });
