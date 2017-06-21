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
    $scope.user = CurrentUser.user();

    $scope.foodList = FoodFactory;
    $scope.categories = Object.keys($scope.foodList);
    console.log($scope.foodList);

    // SEARCH - GO TO FOOD
    $scope.selectFood = function(foodname) {
      $scope.appearance = foodname;
    };
    $scope.scrollTo = function() {
      $location.hash('_' + $scope.appearance);
      $anchorScroll();
    };

    // LIKE/DISLIKE FOOD
    $scope.like = function(foodName) {
      var like = {
        nameFood: foodName,
        countVote: [true],
      };
      if ($scope.user.email !== undefined) {
        GouterService.findOneAndUpdate(like).then(function(res) {
        }, function(err) {});
      } else {
        LocalService.set("I like", JSON.stringify(like)).then(function(res) {
        }, function(err) {});
      }
    };
    $scope.dislike = function(foodName) {
      var like = {
        nameFood: foodName,
        countVote: [false],
      };
      if ($scope.user.email !== undefined) {
        GouterService.findOneAndUpdate(like).then(function(res) {
        }, function(err) {});
      } else {
        LocalService.set("I like", JSON.stringify(like)).then(function(res) {
        }, function(err) {});
      }
    };

    // TO TASTE FOOD
    $scope.foods = [];

    GouterService.findAll(CurrentUser.user()._id).then(function(res) {
      $scope.foods = res.data;
      console.log("Food to taste in database", $scope.foods);
    }, function(err) {
      console.log("Doesn't work!");
    });

    $scope.filterTaste = function(food) {
      if(food.food.toTaste === true) {
        return true;
      }
      return false;
    };

    $scope.addChoice = function(name) {
      var choice = {
        nameFood: name,
        toTaste: true
      };
      console.log("name", name);
      console.log("choice", choice);
      console.log("nameFood", choice.nameFood);
      /* NO DOUBLE IN DATABASE */
      // if (choice.nameFood) {
        if ($scope.user.email !== undefined) {
          console.log("Database");
          GouterService.findOneAndUpdate(choice).then(function(res) {}, function(err) {});
        } else {
          console.log("LocalStorage");
          LocalService.set("gouter", JSON.stringify(choice)).then(function(res) {}, function(err) {});
        }
      // }
      location.reload(true);
    };

    /*$scope.deselect = function(name) {
      var choice = {
        nameFood: name,
        toTaste: false
      };
      if ($scope.user.email !== undefined) {
        GouterService.findOneAndUpdate(choice).then(function(res) {}, function(err) {});
      } else {
        LocalService.set("Choice", JSON.stringify(choice)).then(function(res) {}, function(err) {});
      }
      // $scope.choices.splice(choice, 1);
      location.reload(true);
    };*/

  });
