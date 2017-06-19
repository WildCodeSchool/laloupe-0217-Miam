
angular.module('app')
    .service('ProfilService', function($http) {
        return {

            findOneAndUpdateName: function(userId, name, nameAvatar){
              console.log(name, nameAvatar);
              return $http.post('/profiles', {user: userId, userName: name, nameAvatar: nameAvatar});
            },

            // getOne: function(name){
            //   console.log(name);
            //   return $http.get('/profiles', {userName: name});
            // }

            getOne: function(nameAvatar){
              console.log("service", nameAvatar);
              return $http.get('/profiles', {nameAvatar: nameAvatar});
            }

        };
});
