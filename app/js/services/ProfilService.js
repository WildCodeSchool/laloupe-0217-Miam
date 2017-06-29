angular.module('app')
    .service('ProfilService', function($http) {
        return {

            findOneAndUpdateName: function(userId, name, nameAvatar){
              console.log(name, nameAvatar);
              return $http.post('/profiles/updateProfil', {user: userId, userName: name, nameAvatar: nameAvatar});
            },

            getAll: function() {
                          return $http.get('/profiles');
                      },

            changeProfil: function(changeProfil){
              console.log('changeProfil', changeProfil);
              return $http.post('/profiles/changeProfil', changeProfil);
            },

        };
});
