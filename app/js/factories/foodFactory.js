angular.module('app')
    .factory('FoodFactory', function() {

      return [
        {
          categorie: "Fruits",
          portion: "Comme tous les fruits et légumes, il faut en manger au moins 5 portions par jour.",
          aliments: [{
              name: "Orange",
              picto: "/img/orange.svg",
              description: "Fruit de l'oranger. Il en existe de plusieurs variétées, couleurs et goûts.",
              suggestions: ["crue", "salade", "jus", "gâteau", "smoothie", "confiture"],
              composition: [""]
            },
            {
              name: "Banane",
              picto: "/img/banana.svg",
              description: "C'est très bon les singes les adorent",
              suggestions: ["crue", "salade", "jus", "gâteau", "smoothie", "confiture"],
              composition: [""]
            }
          ]
        },
        {
          categorie: "Légumes",
          portion: "Comme tous les fruits et légumes, il faut en manger au moins 5 portions par jour.",
          aliments: [{
              name: "Carotte",
              picto: "/img/carrot.svg",
              description: "Les lapins en raffolent, ça rend aimable et donne les fesses roses.",
              suggestions: ["crue", "cuit", "salade", "soupe", "gâteau", "purée", "vapeur"],
              composition: [""]
            },
          ]
        },
        {
          categorie: "Féculents",
          portion: "Il faut manger des féculents plusieurs fois par jour sous différentes formes (pain, pâtes, pommes de terre).",
          aliments: [{
              name: "Riz",
              picto: "/img/rice.svg",
              description: "On en mange beaucoup en Asie. Il en existe de multiples variétées.",
              suggestions: ["cuit","gâteau", "vapeur"],
              composition: [""]
            },
            {
              name: "Pain",
              picto: "/img/bread.svg",
              description: "Aux céréales, nature, en boule… Il en existe de toutes les sortes !",
              suggestions: ["nature","grillé", "avec de la confiture", "avec du beurre"],
              composition: ["Gluten"]
            },
          ]
        },
        {
          categorie: "Viandes, poissons, œufs",
          portion: "Il faut en manger 1 fois par jour, 2 maximum.",
          aliments: [{
              name: "Poisson",
              picto: "/img/fish.svg",
              description: "De mer ou de rivière, il existe une quantité impressionnante d'espèces.",
              suggestions: ["cuit", "crue"],
              composition: ["Poisson"]
            },
            {
              name: "Viande",
              picto: "/img/steak.svg",
              description: "Viande rouge ou viande blanche, il y en a pour tous les goûts !",
              suggestions: ["cuite", "en tartare", "chaude", "froide"],
              composition: ["Viande"]
            },
            {
              name: "Oeuf",
              picto: "/img/egg.svg",
              description: "On mange le plus souvent ceux pondus par les poules.",
              suggestions: ["cocotte", "à la coque", "dur", "sur le plat", "mimosa"],
              composition: ["Œuf"]
            },
          ]
        },
        {
          categorie: "Produits laitiers",
          portion: "Il faut manger un produit laitier à chaque repas.",
          aliments: [{
              name: "Lait",
              picto: "/img/milk.svg",
              description: "Provient le plus souvent de la vache",
              suggestions: ["frais", "chaud"],
              composition: [""]
            },
          ]
        },
        {
          categorie: "Produits sucrés",
          portion: "Il faut en consommer avec modération.",
          aliments: [{
              name: "Gâteau",
              picto: "/img/cake.svg",
              description: "Aux fruits, chocolats crème... il y a l'embarras du choix.",
              suggestions: ["gâteau"],
              composition: [""]
            },
          ]
        }

      ];

    });
