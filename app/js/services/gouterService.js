angular.module('app')
    .service('GouterService', function($http) {
        return {
            findOneAndUpdate: function(like){
              console.log(like);
              return $http.post('/foods', {food: like});
            }

        };
    });
