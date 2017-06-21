angular.module('app')
    .service('GouterService', function($http) {
        return {
            findAll: function() {
              return $http.get('/foods');
            },
            // findOneAndUpdate: function(/*profileId,*/ name, /*like,*/ choice){
            //   console.log(/*profileId,*/ "Name:", name, /*"Like:", like,*/ "Choice:", choice);
            //   return $http.post('/foods', {
            //     // profile: profileId,
            //     food: {
            //       nameFood: name,
            //       // countVote: like,
            //       // doNotEat: false,
            //       toTaste: choice
            //     }
            //   });
            // },
            like: function(userId, name) {
              return $http.post("/foods", { userId: userId, food: { nameFood: name } });
            }


            // findOneAndUpdate: function(like){
            //   console.log(like);
            //   return $http.post('/foods', {food: like});
            // },
        };
    });
