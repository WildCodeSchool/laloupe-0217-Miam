angular.module('app')
    .service('GouterService', function($http) {
        return {
            create: function(like){
              console.log(like);
              return $http.post('/foods', {food: like});
            }

        };
    });
