angular.module('app')
    .service('ContreIndicationService', function($http) {
        return {
            notEating: function(food) {
              console.log("Food:", food);
              return $http.post('/foods/notEating/', { food: food });
            }
        };
    });
