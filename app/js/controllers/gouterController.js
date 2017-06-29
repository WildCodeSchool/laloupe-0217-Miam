angular.module('app')
  .controller('GouterController', function($scope, FoodFactory, AvatarFactory, $location, $anchorScroll, Auth, CurrentUser, LocalService, GouterService, ProfilService) {

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

    // SEARCH - GO TO FOOD
    $scope.selectFood = function(foodname) {
      $scope.appearance = foodname;
    };
    $scope.scrollTo = function() {
      $location.hash('_' + $scope.appearance);
      $anchorScroll();
    };

    // PROFIL & FOOD
    $scope.profile = "";
    ProfilService.getAll().then(function(res) {
       var data = res.data;
       console.log("data", data);
       for (var i = 0; i < data.length; i++) {
         if(res.data[i].isCurrentProfil === true) {
          $scope.profile += res.data[i]._id;
           console.log("$scope.profile", $scope.profile);
         }
       }

       // DO NOT SHOW ALIM WITH CONTRAINDICATION
       $scope.foodNotEaten = [];
       GouterService.findByProfile($scope.profile).then(function(res) {
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

       // LIKE/DISLIKE FOOD
       $scope.like = function(name) {
         var like = {
           nameFood: name,
           countVote: true,
         };
         console.log("like", like);
         if ($scope.user.email !== undefined) {
           GouterService.like(like, $scope.profile).then(function(res) {}, function(err) {});
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
           GouterService.like(like, $scope.profile).then(function(res) {}, function(err) {});
         } else {
           LocalService.set("I like", JSON.stringify(like)).then(function(res) {}, function(err) {});
         }
         location.reload(true);
       };

       // SEE VOTED/LIKED FOOD
       $scope.votes = [];
       function filterVote() {
         return GouterService.findByProfile($scope.profile).then(function(res) {
           $scope.votes = res.data;
           console.log("$scope.votes liked", $scope.votes, res.data);
           var nameVote = $scope.votes.map(function(vote) {
             return vote.food.nameFood;
           });
           $scope.categories.forEach(function(categorie) {
             $scope.foodList[categorie].aliments.forEach(function(aliment, i) {
               var index = nameVote.indexOf(aliment.name);
               if(index !== -1) {
                 $scope.foodList[categorie].aliments[i].votes = $scope.votes[index].food.countVote;
                 $scope.foodList[categorie].aliments[i].votes.length = 3;
               } else {
                 $scope.foodList[categorie].aliments[i].votes = [];
                 $scope.foodList[categorie].aliments[i].votes.length = 3;
               }
             });
           });
         });
       }
       filterVote();
       console.log($scope.foodList);

       // TO TASTE FOOD
       $scope.foods = [];
       GouterService.findByProfile($scope.profile).then(function(res) {
         $scope.foods = res.data;
         console.log("Food in database by profile", $scope.foods);
       }, function(err) {
         console.log("Doesn't work!");
       });
       $scope.filterTaste = function(food) {
        if (food.food.toTaste === true) {
         return true;
        }
        return false;
       };
       $scope.addChoice = function(name) {
         var choice = {
           nameFood: name,
           toTaste: true
         };
         if ($scope.user.email !== undefined) {
           console.log("Database", choice);
           GouterService.taste(choice, $scope.profile).then(function(res) {}, function(err) {});
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
           GouterService.taste(choice, $scope.profile).then(function(res) {}, function(err) {});
         } else {
           LocalService.set("gouter", JSON.stringify(choice)).then(function(res) {}, function(err) {});
         }
         location.reload(true);
       };

     });

  });
