angular.module('app')
    .factory('RewardFactory', function() {

        var reward = {
          reward1: {
            picto: "",
            name: "",
            objectif: ""
          },
          reward2: {
            picto: "",
            name: "",
            objectif: ""
          }
        };

        // return {
        //     user: function() {
        //         if (LocalService.get('user')) {
        //             return angular.fromJson(LocalService.get('user'));
        //         } else {
        //             return {};
        //         }
        //     }
        // };
    });
