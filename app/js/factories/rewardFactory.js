angular.module('app')
    .factory('RewardFactory', function() {

        var rewardList = [{
            picto: "/img/university.svg",
            name: "Découverte",
            objectif: "Bravo ! Tu as goûté 1 fois cet aliment !"
          },
          {
            picto: "",
            name: "Petit goûteur",
            objectif: "Bravo ! Tu as goûté 3 fois cet aliment !"
          },
          {
            picto: "",
            name: "Goûteur",
            objectif: "Bravo ! Tu as aimé 3 aliments !"
          },

          {
            picto: "",
            name: "Géant rouge",
            objectif: "Bravo ! Tu as aimé les aliments rouges !"
          },
          {
            picto: "",
            name: "Géant orange",
            objectif: "Bravo ! Tu as aimé les aliments oranges !"
          },
          {
            picto: "",
            name: "Géant vert",
            objectif: "Bravo ! Tu as aimé les aliments verts !"
          },
          {
            picto: "",
            name: "Gourmet",
            objectif: "Waouh ! Bravo ! Tu as aimé tous les aliments de la même famille!"
          },
          {
            picto: "",
            name: "Fin gourmet",
            objectif: "Waouh ! Bravo ! Tu as aimé tous les aliments de 3 famille!"
          },
          {
            picto: "",
            name: "Gastronome",
            objectif: "Félicitations ! On est fier de toi, tu as tout goûté !"
          },

        ];
        return rewardList;
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
