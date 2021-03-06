angular.module('app')
    .service('AvatarService', function($http) {
        return {

            findOneAndUpdateProfil: function(userId, name, nameAvatar) {
                console.log(userId, name, nameAvatar);
                return $http.post('/profiles', {user: userId, profil: {userName: name, nameAvatar: nameAvatar}});
            },
        };
    });
