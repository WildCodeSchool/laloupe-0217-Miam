angular.module('app')
    .service('RewardService', function($http) {
        return {
            findAll: function() {
              return $http.get('/rewards');
            },
            locked: function(nameReward, profile) {
              return $http.post('/rewards/isLocked/', { nameReward: nameReward, profile: profile });
            },
        };
    });
