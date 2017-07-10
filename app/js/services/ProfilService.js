angular.module('app')
    .service('ProfilService', function($http) {
        return {
            findOneAndUpdateName: function(user, isCurrentProfil, name, nameAvatar){
              return $http.post('/profiles/updateProfil', { user: user, isCurrentProfil: isCurrentProfil, userName: name, nameAvatar: nameAvatar });
            },
            getAll: function() {
              return $http.get('/profiles');
            },
            changeProfil: function(changeProfil){
              return $http.post('/profiles/changeProfil', changeProfil);
            },
        };
});
