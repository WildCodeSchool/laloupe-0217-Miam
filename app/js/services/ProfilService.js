angular.module('app')
    .service('ProfilService', function($http) {
        return {
            // findOneAndUpdate: function(like){
            //   console.log(like);
            //   return $http.post('/foods', {food: like});
            // }
            create: function(name){
              console.log(name);
              return $http.post('/profiles', {userName: name});
            }

        };
    });
