angular.module('app')
    .service('MangerService', function($http) {
        return {
            findAll: function() {
              return $http.get('/foods');
            },
            like: function(food){
              console.log(food);
              return $http.post('/foods/like/', { food: food });
            },
        };
    });
