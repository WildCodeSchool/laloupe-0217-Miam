angular.module('app')
    .service('GouterService', function($http) {
        return {
            findAll: function() {
              return $http.get('/foods');
            },
            findByProfile: function(id) {
              return $http.get('/foods/' + id);
            },
            taste: function(choice, profile){
              return $http.post('/foods/taste/', { food: choice, profile: profile });
            },
            like: function(like, profile){
              return $http.post('/foods/like/', { food: like, profile: profile });
            },
        };
    });
