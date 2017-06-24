angular.module('app')
  .controller('GouterController', function($scope, FoodFactory, $location, $anchorScroll, Auth, CurrentUser, LocalService, GouterService) {

    // SIMPLIFY FOOD NAMES
    $scope.underscore = function(string) {
      return string.replace(/[_]/g, " ");
    };
    $scope.regAccent = function(string) {
      return string.normalize('NFD').replace(/[\u0300-\u036f\u0100-\u017f]/g, "").toLowerCase();
    };
    $scope.correct = function(string) {
      return $scope.regAccent(string);
    };
    $scope.arrayToString = function(string) {
      return string.join(", ");
    };

    // GENERALITY
    var i = 0;

    $scope.user = CurrentUser.user();

    $scope.foodList = FoodFactory;
    $scope.categories = Object.keys($scope.foodList);
    console.log($scope.foodList);

    // DO NOT SHOW ALIM WITH CONTRAINDICATION
    $scope.foodNotEaten = [];
    GouterService.findAll(CurrentUser.user()._id).then(function(res) {
      $scope.foodNotEaten = res.data;
      $scope.categories.forEach(function(categories) {
        $scope.currentCategorie = categories;
        $scope.currentAliments = $scope.foodList[$scope.currentCategorie].aliments;
        $scope.foodNotEaten.forEach(function(foodNotEaten) {
          $scope.currentAliments.forEach(function(currentAliments) {
            if (currentAliments.name === foodNotEaten.food.nameFood) {
              if (foodNotEaten.food.doNotEat === true) {
                console.log("One food match!", currentAliments.name);
                $scope.currentAliments.splice($scope.currentAliments.indexOf(currentAliments), 1);
              }
            }
          });
        });
      });
    });

    // SEARCH - GO TO FOOD
    $scope.selectFood = function(foodname) {
      $scope.appearance = foodname;
    };
    $scope.scrollTo = function() {
      $location.hash('_' + $scope.appearance);
      $anchorScroll();
    };

    // LIKE/DISLIKE FOOD
    $scope.like = function(name) {
      var like = {
        nameFood: name,
        countVote: true,
      };
      if ($scope.user.email !== undefined) {
        GouterService.like(like).then(function(res) {}, function(err) {});
      } else {
        LocalService.set("I like", JSON.stringify(like)).then(function(res) {}, function(err) {});
      }
      location.reload(true);
    };
    $scope.dislike = function(name) {
      var like = {
        nameFood: name,
        countVote: false,
      };
      if ($scope.user.email !== undefined) {
        GouterService.like(like).then(function(res) {}, function(err) {});
      } else {
        LocalService.set("I like", JSON.stringify(like)).then(function(res) {}, function(err) {});
      }
      location.reload(true);
    };

    // SEE VOTED/LIKED FOOD
    $scope.vote = [];
    GouterService.findLiked(CurrentUser.user()._id).then(function(res) {
      $scope.vote = res.data;
      console.log("$scope.vote", $scope.vote);
    }, function(err) {
      console.log("$scope.vote not working!");
    });

    // TO TASTE FOOD
    $scope.filterTaste = function(food) {
      if (food.food.toTaste === true) {
        return true;
      }
      return false;
    };

    $scope.addChoice = function(name) {
      var choice = {
        nameFood: name,
      };
      if ($scope.user.email !== undefined) {
        console.log("Database", choice);
        GouterService.taste(choice).then(function(res) {}, function(err) {});
      } else {
        console.log("LocalStorage");
        LocalService.set("gouter", JSON.stringify(choice)).then(function(res) {}, function(err) {});
      }
      location.reload(true);
    };

    $scope.deselect = function(name) {
      var choice = {
        nameFood: name,
        toTaste: false
      };
      if ($scope.user.email !== undefined) {
        GouterService.taste(choice).then(function(res) {}, function(err) {});
      } else {
        LocalService.set("gouter", JSON.stringify(choice)).then(function(res) {}, function(err) {});
      }
      location.reload(true);
    };

  });
