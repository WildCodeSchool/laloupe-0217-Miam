angular.module('app')
    .service('ContreIndicationService', function($http) {
        return {
            create: function(food, profile){
              console.log(profile);
              return $http.post('/foods', {food: food, profile: profile});
            }
        };
    });
