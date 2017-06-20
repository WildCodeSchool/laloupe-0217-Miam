angular.module('app')
    .service('GouterService', function($http) {
        return {
            findAll: function() {
              return $http.get('/foods');
            },
            findOneAndUpdate: function(like){
              console.log(like);
              return $http.post('/foods', {food: like});
            },
        };
    });
