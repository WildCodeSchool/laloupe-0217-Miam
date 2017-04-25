angular.module('app')
    .service('mangerService', function($http) {
        return {
            getAll: function() {
                return $http.get('/fichesAliments');
            },
            update: function(id, user) {
                return $http.put('/fichesAliments');
            },

        };
    });
