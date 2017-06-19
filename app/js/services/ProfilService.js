
angular.module('app')
    .service('ProfilService', function($http) {
        return {

            findOneAndUpdateName: function(userId, name, nameAvatar){
              console.log(userId, name, nameAvatar);
              return $http.post('/profiles', {user: userId, userName: name, nameAvatar: nameAvatar});
            },

            getOne: function(name, Avatar){
              console.log(name, Avatar);
              return $http.get('/profiles', {nameAvatar: nameAvatar});
            }

        };
});
