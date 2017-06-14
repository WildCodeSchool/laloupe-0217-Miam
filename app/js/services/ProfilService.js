angular.module('app')
    .service('ProfilService', function($http) {
        return {
            // findOneAndUpdate: function(like){
            //   console.log(like);
            //   return $http.post('/foods', {food: like});
            // }
            findOneAndUpdate: function(userId, name){
              console.log(userId, name);
              return $http.post('/profiles', {user: userId, userName: name});
            }

        };
    });
