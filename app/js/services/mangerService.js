angular.module('app')
    .service('MangerService', function($http) {
        return {
            create: function(nameFood, countVote){
              return $http.post('/foods', {nameFood: nameFood, countVote: countVote});
            }

        };
    });
