angular.module('app')
    .service('ContreIndicationService', function($http) {
        return {
            create: function(food, profile){
              return $http.post('/foods', {food: food, profile: profile});
            }
        };
    });
