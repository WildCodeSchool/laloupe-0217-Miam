angular.module('app')
    .factory('FoodFactory', function() {

        var foodList = {
            Fruits: {
                portion: "Comme tous les fruits et légumes, il faut en manger au moins 5 portions par jour.",
                aliments: [{
                        name: "Orange",
                        picto: "/img/orange.svg",
                        description: "Bourrée de vitamines et de minéraux, elle permet de lutter contre le froid et la fatigue.",
                        suggestions: ["crue", "coupée en quartiers ou en rondelles", "en jus", "en salade", "zeste ou suprême", "marmelade", "canard à l'orange"],
                        composition: [""]
                    },
                    {
                        name: "Banane",
                        picto: "/img/banane.svg",
                        description: "En France, c'est le 2ème fruit le plus consommé après la pomme.",
                        suggestions: ["crue", "poêlée", "séchée", "flambée", "cuite au four", "avec du chocolat"],
                        composition: [""]
                    },
                    {
                        name: "Pomme",
                        picto: "/img/pomme.svg",
                        description: "La pomme est apparue en Chine, il y a 80 millions d'années !",
                        suggestions: ["crue", "cuite", "séchée", "en chips", "en compote", "en tarte"],
                        composition: [""]
                    },
                    {
                        name: "Fraise",
                        picto: "/img/fraise.svg",
                        description: "A l'époque des Romains, les femmes se faisaient des masques de beauté avec.",
                        suggestions: ["nature", "avec du sucre", "de la crème chantilly", "en tarte", "coulis ou confiture"],
                        composition: [""]
                    },
                    {
                        name: "Poire",
                        picto: "/img/poire.svg",
                        description: "On peut en trouver toute l'année car en France, on cultive une dizaine de variétés : celles d'été, et celles d'automne-hiver.",
                        suggestions: ["crue", "cuite", "séchée", "en compote ou enn tarte", "poire Belle-Hélène."],
                        composition: [""]
                    },
                    {
                        name: "Pêche",
                        picto: "/img/peche.svg",
                        description: "Sucrée et désaltérante, c'est le fruit de l'été par excellence !",
                        suggestions: ["crue", "pochée", "poêlée", "au sirop", "en marmelade", "en tarte"],
                        composition: [""]
                    },
                ]
            },
            Légumes: {
                portion: "Comme tous les fruits et légumes, il faut en manger au moins 5 portions par jour.",
                aliments: [{
                    name: "Carotte",
                    picto: "/img/carotte.svg",
                    description: "Dans certains région de France, on appelle la carotte la 'pastenade'.",
                    suggestions: ["crue", "cuite", "râpée", "en gratin", "en purée", "en bâtonnets", "à la vapeur", "épicée", "sucrée", "glacée"],
                    composition: [""]
                },
                // {
                //     name: "Haricots_verts",
                //     picto: "/img/haricotsverts.svg",
                //     description: "Certains haricots verts sont...jaunes : ce sont les haricots-beurre !",
                //     suggestions: ["en fagot", "en salade", "en purée", "cuisson à l'eau ou à la vapeur", "à l'ail"],
                //     composition: [""]
                // },
                {
                    name: "Salade",
                    picto: "/img/salade.svg",
                    description: "Le mot 'salade' vient de l'italien 'insalata' qui signifie : mets salé.",
                    suggestions: ["crue", "braisé", "en soupe", "hachée en accompagnement", "dans un sandwich", "en entrée ou avec le fromage"],
                    composition: [""]
                },
                {
                    name: "Tomate",
                    picto: "/img/tomate.svg",
                    description: "Si elle est cuisinée comme légume, la tomate est en fait un fruit.",
                    suggestions: ["crue", "cuit", "en salade", "facie", "en sauce", "en coulis", "en tarte", "en confiture"],
                    composition: [""]
                },
                // {
                //     name: "Courgette",
                //     picto: "/img/courgette.svg",
                //     description: "Habituellement allongées et vertes, on trouve aussi des courgettes rondes, grises, blanches ou jaunes.",
                //     suggestions: ["crue", "cuite", "râpée", "sautée", "poêlée", "farcie", "en gratin", "en tarte", "en velouté"],
                //     composition: [""]
                // },
                {
                    name: "Radis",
                    picto: "/img/radis.svg",
                    description: "Les Grecs pensaient que le radis était capable d'arrêter les saignements et de calmer la toux.",
                    suggestions: ["cru avec un peu de sel, de poivre et/ou de beurre", "trempé dans du fromage frais", "les fanes à l'étuvée en soupe ou velouté"],
                    composition: [""]
                },
               ]
            },
            Féculents: {
                portion: "Il faut manger des féculents plusieurs fois par jour sous différentes formes (pain, pâtes, pommes de terre).",
                aliments: [{
                        name: "Riz",
                        picto: "/img/rice.svg",
                        description: "On en mange beaucoup en Asie. Il en existe de multiples variétées.",
                        suggestions: ["cuit", "gâteau", "vapeur"],
                        composition: [""]
                    },
                    {
                        name: "Pain",
                        picto: "/img/bread.svg",
                        description: "Aux céréales, nature, en boule… Il en existe de toutes les sortes !",
                        suggestions: ["nature", "grillé", "avec de la confiture", "avec du beurre"],
                        composition: ["Gluten"]
                    },
                    {
                        name: "Maïs",
                        picto: "/img/maïs.svg",
                        description: "Originaire du Mexique, il constituait l'aliment de base des Amérindiens avant l'arrivée de Christophe Colomb. C'est une plante herbacée largement cultivée comme céréale.",
                        suggestions: ["en farine et galette cuite", "grillé en épis", "éclaté en Pop Corn","en flocon (Corn Flakes)", "en semoule (Polenta)", "en salade"],
                        composition: [""]
                    },
                    {
                        name: "Pomme_de_terre",
                        picto: "/img/pomme_de_terre.svg",
                        description: "C'est une plante herbacée dont on mange les tubercules. L'explorateur espagnol Pedro Cieza de Leon la découvrit au Pérou et la rapporta en Europe il y a 600 ans.",
                        suggestions: ["à l'eau", "à la vapeur", "à la friture", "au four", "en salade", "en purée"],
                        composition: [""]
                    },
                    {
                        name: "Céréales",
                        picto: "/img/cereale.svg",
                        description: "Une céréale est une plante qui produit des graines servant à nourrir les hommes et les animaux domestiques. Les graines sont aussi moulues pour en faire de la farine utilisée pour la fabrication de pains, de gâteaux etc. Il existe différentes variétés : Avoine, Orge, Seigle, Blé etc.",
                        suggestions: ["en farine", "en semoule", "en bouillie", "en flocons", "en pâtes"],
                        composition: ["gluten"]
                    },
                    {
                        name: "Pâtes",
                        picto: "/img/pâtes.svg",
                        description: "Les pâtes alimentaires sont fabriqués à partir d'un mélange pétri de farine, de semoule de blé dur. En Asie, on fabrique aussi les pâtes avec de la farine de blé tendre ou de riz. Il existe beaucoup de formes différentes.",
                        suggestions: ["à l'eau", "en lasagne", "avec différentes sauces", "en gratin", "en salade", "en soupe"],
                        composition: ["gluten"]
                    },
                ]
            },
            Viandes_Poissons_Œufs: {
                portion: "Il faut en manger 1 fois par jour, 2 maximum.",
                aliments: [{
                        name: "Poisson",
                        picto: "/img/fish.svg",
                        description: "De mer ou de rivière, il existe une quantité impressionnante d'espèces.",
                        suggestions: ["cuit", "cru"],
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
                        name: "Œuf",
                        picto: "/img/egg.svg",
                        description: "On mange le plus souvent ceux pondus par les poules.",
                        suggestions: ["cocotte", "à la coque", "dur", "sur le plat", "mimosa"],
                        composition: ["Œuf"]
                    },
                ]
            },
            Produits_laitiers: {
                portion: "Il faut manger un produit laitier à chaque repas.",
                aliments: [{
                    name: "Lait",
                    picto: "/img/milk.svg",
                    description: "Provient le plus souvent de la vache",
                    suggestions: ["frais", "chaud"],
                    composition: [""]
                }, ]
            },
            Produits_sucrés: {
                portion: "Il faut en consommer avec modération.",
                aliments: [{
                    name: "Gâteau",
                    picto: "/img/cake.svg",
                    description: "Au fruit, au chocolat, à la crème... il y a l'embarras du choix.",
                    suggestions: ["gâteau"],
                    composition: ["Gluten"]
                }, ]
            }
        };
        return foodList;
      });
