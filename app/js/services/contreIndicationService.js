angular.module('app')
    .service('ContreIndicationService', function($http) {
        return {
            notEating: function(food, profile) {
              return $http.post('/foods/notEating/', { food: food, profile: profile });
            }
        };
    });
