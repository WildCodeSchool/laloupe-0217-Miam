angular.module('app')
    .service('MangerService', function($http) {
        return {
            create: function(aliment, profile){
              return $http.post('/foods', {aliment: aliment, user: profile});
            }

        };
    });
