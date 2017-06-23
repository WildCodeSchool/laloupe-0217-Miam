angular.module('app')
    .service('MangerService', function($http) {
        return {
            findAll: function() {
              return $http.get('/foods');
            },
            likeAll: function(food){
              console.log(food);
              return $http.post('/foods/likeAll/', { food: food });
            },
        };
    });
