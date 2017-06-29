angular.module('app')
    .service('MangerService', function($http) {
        return {
            findAll: function() {
              return $http.get('/foods');
            },
            findByProfile: function(id) {
              return $http.get('/foods/' + id);
            },
            likeAll: function(food, profile){
              console.log(food, profile);
              return $http.post('/foods/likeAll/', { food: food, profile: profile });
            },
        };
    });
