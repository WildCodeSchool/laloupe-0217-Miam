
angular.module('app')
    .service('ProfilService', function($http) {
        return {

            findOneAndUpdateName: function(userId, name, nameAvatar){
              console.log(name, nameAvatar);
              return $http.post('/profiles/updateProfil', {user: userId, userName: name, nameAvatar: nameAvatar});
            },

            // getOne: function(name){
            //   console.log(name);
            //   return $http.get('/profiles', {userName: name});
            // }

            // getOne: function(content){
            //   console.log("service", content);
            //   return $http.get('/profiles', + content);
            // },

            getAll: function() {
                          return $http.get('/profiles');
                      },

            changeProfil: function(changeProfil){
              console.log('changeProfil', changeProfil);
              return $http.post('/profiles/changeProfil', changeProfil);
            },

        };
});
