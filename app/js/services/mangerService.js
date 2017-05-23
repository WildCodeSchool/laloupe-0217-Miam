angular.module('app')
    .service('MangerService', function($http) {
        return {
            create: function(nameFood, countVote){
              return $http.post('/foods', {aliment: aliment, countVote: countVote});
            }

        };
    });
