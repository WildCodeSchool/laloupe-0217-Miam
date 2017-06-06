angular.module('app')
    .service('ProfilService', function($http) {
        return {
            // findOneAndUpdate: function(like){
            //   console.log(like);
            //   return $http.post('/foods', {food: like});
            // }
<<<<<<< 0ec54ee4609aac8226d07ec14b9b8f43fb2973ac
            findOneAndUpdate: function(userId, name){
              console.log(userId, name);
              return $http.post('/profiles', {user: userId, userName: name});
=======
            create: function(name){
              console.log(name);
              return $http.post('/profiles', {userName: name});
>>>>>>> post userName into ProfilService OK
            }

        };
    });
