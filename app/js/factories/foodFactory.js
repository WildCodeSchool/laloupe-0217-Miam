angular.module('app')
    .factory('FoodFactory', function() {

        var food = {
          fruits: {
            categorie: "Fruits",
            portion: "Comme tous les fruits et légumes il faut en manger au moins 5 portions par jour.",
            Orange: {
              name: "Orange",
              picto: "/img/orange.svg",
              description: "Fruit de l'oranger. Il en existe de plusieurs variétées, couleurs et goûts",
              suggestions: ["crue", "salade", "jus", "gâteau", "smoothie", "confiture"],
              composition: [""]
            }
          },
          legumes: {
            categorie: "Légumes",
            portion: "Comme tous les fruits et légumes il faut en manger au moins 5 portions par jour.",
            Carotte: {
              name: "Carotte",
              picto: "/img/carrot.svg",
              description: "Les lapins en raffolent, ça rend aimable et donne les fesses roses",
              suggestions: ["crue", "cuit", "salade", "soupe", "gâteau", "purée", "vapeur"],
              composition: [""]
            }
          },
          feculents: {
            categorie: "Féculents",
            portion: "Il faut en manger plusieurs fois par jour sous différentes formes (pain, pâtes, pommes de terre).",
            Riz: {
              name: "Riz",
              picto: "/img/rice.svg",
              description: "On en mange beaucoup en Asie; Il en existe de multiples variétées.",
              suggestions: ["cuit","gâteau", "vapeur"],
              composition: [""]
            }
          },
          viandes: {
            categorie: "Viandes, poissons, œufs",
            portion: "Il faut en manger 1 fois par jour, 2 maximum.",
            Poisson: {
              name: "Poisson",
              picto: "/img/fish.svg",
              description: "De mer ou de rivière, il existe une quantité impressionnante d'espèces.",
              suggestions: ["cuit", "crue"],
              composition: [""]
            }
          },
          lait: {
            categorie: "Produits laitiers",
            portion: "Il faut manger un produit laitier à chaque repas",
            Lait: {
              name: "Lait",
              picto: "/img/milk-bottle.svg",
              description: "Provient le plus souvent de la vache",
              suggestions: ["frais", "chaud"],
              composition: [""]
            }
          },
          sucre: {
            categorie: "Produits sucrés",
            portion: "Il faut en consommer avec modération",
            Gâteau: {
              name: "Gâteau",
              picto: "/img/muffin.svg",
              description: "Aux fruits, chocolats crème... il y a l'embarras du choix",
              suggestions: ["gâteau"],
              composition: [""]
            }
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
