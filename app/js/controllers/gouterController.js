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
    $scope.votes = [];
    $scope.currentCategorie = $scope.categories[i];
    $scope.currentAliments = $scope.foodList[$scope.currentCategorie].aliments;

    // function voted (food) {
    //   GouterService.findLiked(CurrentUser.user()._id).then(function(res) {
    //     $scope.votes = res.data;
    //     $scope.votes.forEach(function(votes) {
    //       $scope.foodKey = votes;
    //       $scope.foodNameVote = votes.food.nameFood;
    //       $scope.foodVotes = votes.food.countVote;
    //       $scope.categories.forEach(function(categories) {
    //         $scope.currentCategorie = categories;
    //         $scope.currentAliments = $scope.foodList[$scope.currentCategorie].aliments;
    //
    //         $scope.currentAliments.forEach(function(currentAliments) {
    //
    //           if ($scope.foodNameVote === currentAliments.name) {
    //             console.log("One food voted on match!", $scope.foodNameVote, $scope.foodVotes);
    //
    //             $scope.foodVotes.forEach(function(foodVotes) {
    //               var isLiked = true;
    //               var isDisliked = false;
    //               console.log("$scope.foodLiked = ($scope.foodVotes.indexOf(isLiked) !== -1)", $scope.foodVotes.indexOf(isLiked) !== -1);
    //               $scope.foodLiked = ($scope.foodVotes.indexOf(isLiked) !== -1);
    //               $scope.foodDisliked = ($scope.foodVotes.indexOf(isDisliked) !== -1);
    //               if ($scope.foodLiked) {
    //                 console.log("$scope.foodVotes.indexOf(isLiked)", $scope.foodVotes.indexOf(isLiked));
    //                 console.log($scope.foodVotes.splice($scope.foodVotes.indexOf(true), 1));
    //                 console.log("$scope.foodVotes after splice", $scope.foodVotes);
    //
    //                   // console.log("This aliment was liked", $scope.foodLiked);
    //                   // var sliced = $scope.foodVotes.slice($scope.foodVotes.indexOf(true), 1);
    //                   // console.log("sliced", sliced);
    //
    //               } else if ($scope.foodDisliked) {
    //                 // console.log("This aliment was disliked", $scope.foodDisliked);
    //               } else {
    //                 console.log("Do nothing, there is no voted food here.");
    //               }
    //             });
    //
    //
    //           } else {
    //             console.log("Those two aliments are not equals");
    //           }
    //
    //         });
    //
    //       });
    //
    //     });
    //   }, function(err) {
    //     console.log("$scope.votes not working!");
    //   });
    // }
    // $scope.currentAliments.filter(voted);


    function voted(food) {
      return GouterService.findLiked(CurrentUser.user()._id).then(function(res) {
        $scope.votes = res.data;
        $scope.categories.forEach(function(categories) {
          $scope.currentCategorie = categories;
          $scope.currentAliments = $scope.foodList[$scope.currentCategorie].aliments;
          $scope.votes.forEach(function(votes) {
            $scope.currentAliments.forEach(function(currentAliments) {
              if (currentAliments.name === votes.food.nameFood) {

                votes.food.countVote.forEach(function(countVote) {
                  $scope.isLiked = countVote === true;
                  $scope.isDisliked = countVote === false;
                  if($scope.isLiked) {
                    console.log("Vote TRUE", currentAliments.name, votes.food.countVote);
                  } else if ($scope.isDisliked) {
                    console.log("Vote FALSE", currentAliments.name, votes.food.countVote);
                  } else {
                    console.log("No countVote");
                  }
                });

              } else {
                console.log("Not a match");
              }
            });
          });
        });
      });
    }
    $scope.currentAliments.filter(voted);


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
