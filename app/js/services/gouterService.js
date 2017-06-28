angular.module('app')
    .service('GouterService', function($http) {
        return {
            findAll: function() {
              return $http.get('/foods');
            },
            taste: function(choice){
              console.log(choice);
              return $http.post('/foods/taste/', { food: choice });
            },
            like: function(like){
              console.log(like);
              return $http.post('/foods/like/', { food: like });
            },
        };
    });
