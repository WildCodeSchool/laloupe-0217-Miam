angular.module('app')
    .service('GoutererService', function($http) {
        return {
            create: function(like){
              console.log(like);
              return $http.post('/foods', {food: like, profile: profile});
            }

        };
    });
