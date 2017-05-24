angular.module('app')
    .service('MangerService', function($http) {
        return {
            create: function(food, profile){
              console.log(profile);
              return $http.post('/foods', {food: food, profile: profile});
            }

        };
    });
