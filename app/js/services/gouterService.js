angular.module('app')
    .service('GouterService', function($http) {
        return {
            findAll: function() {
              return $http.get('/foods');
            },
            findByProfile: function(id) {
              console.log("GouterService", id);
              return $http.get('/foods/' + id);
            },
            taste: function(choice, profile){
              console.log(choice, profile);
              return $http.post('/foods/taste/', { food: choice, profile: profile });
            },
            like: function(like, profile){
              console.log(like, profile);
              return $http.post('/foods/like/', { food: like, profile: profile });
            },
        };
    });
