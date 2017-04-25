angular.module('app')
    .service('mangerService', function($http) {
        return {
            getAll: function() {
                return $http.get('/users');
            },
            update: function(id, user) {
                return $http.put('/users/' + id, user);
            },

        };
    });
