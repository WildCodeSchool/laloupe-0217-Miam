angular.module('app')
    .factory('FoodFactory', function() {

        var foodList = {
            Fruits: {
                portion: "Comme tous les fruits et légumes, il faut en manger au moins 5 portions par jour.",
                aliments: [{

                        name: "Banane",
                        picto: "/img/banane.svg",
                        description: "En France, c'est le 2ème fruit le plus consommé après la pomme.",
                        suggestions: ["crue", "poêlée", "séchée", "flambée", "cuite au four", "avec du chocolat"],
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
                        name: "Orange",
                        picto: "/img/orange.svg",
                        description: "Bourrée de vitamines et de minéraux, elle permet de lutter contre le froid et la fatigue.",
                        suggestions: ["crue", "coupée en quartiers ou en rondelles", "en jus", "en salade", "zeste ou suprême", "marmelade", "canard à l'orange"],
                        composition: [""]
                    },
                    {
                        name: "Pêche",
                        picto: "/img/peche.svg",
                        description: "Sucrée et désaltérante, c'est le fruit de l'été par excellence !",
                        suggestions: ["crue", "pochée", "poêlée", "au sirop", "en marmelade", "en tarte"],
                        composition: [""]
                    },
                    {
                        name: "Poire",
                        picto: "/img/poire.svg",
                        description: "On peut en trouver toute l'année car en France, on cultive une dizaine de variétés : celles d'été, et celles d'automne-hiver.",
                        suggestions: ["crue", "cuite", "séchée", "en compote ou en tarte", "poire Belle-Hélène."],
                        composition: [""]
                    },
                    {
                        name: "Pomme",
                        picto: "/img/pomme.svg",
                        description: "La pomme est apparue en Chine, il y a 80 millions d'années !",
                        suggestions: ["crue", "cuite", "séchée", "en chips", "en compote", "en tarte"],
                        composition: [""]
                    },
                ]
            },
            Légumes: {
                portion: "Comme tous les fruits et légumes, il faut en manger au moins 5 portions par jour.",
                aliments: [{

                        name: "Avocat",
                        picto: "/img/avocat.svg",
                        description: "L'avocat est le fruit de l'avocatier. Ses origines se trouvent au Mexique.",
                        suggestions: ["cru nature ou avec un peu de sel", "mixé en purée froide", "en salade"],
                        composition: [""]
                    },
                    {
                        name: "Brocoli",
                        picto: "/img/brocoli.svg",
                        description: "C'est une variété de chou du sud de l'Italie, sélectionné par les Romains à partir du chou sauvage.",
                        suggestions: ["cru", "à l'eau ou à la vapeur", "en salade", "en gratin", "en purée"],
                        composition: [""]
                    },
                    {
                        name: "Carotte",
                        picto: "/img/carotte.svg",
                        description: "Dans certains région de France, on appelle la carotte la 'pastenade'.",
                        suggestions: ["crue", "cuite", "râpée", "en gratin", "en purée", "en bâtonnets", "à la vapeur", "épicée", "sucrée", "glacée"],
                        composition: [""]
                    },
                    {
                        name: "Radis",
                        picto: "/img/radis.svg",
                        description: "Les Grecs pensaient que le radis était capable d'arrêter les saignements et de calmer la toux.",
                        suggestions: ["cru avec un peu de sel, de poivre et/ou de beurre", "trempé dans du fromage frais", "les fanes à l'étuvée en soupe ou velouté"],
                        composition: [""]
                    },
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
                ]
            },
            Féculents: {
                portion: "Il faut manger des féculents plusieurs fois par jour sous différentes formes (pain, pâtes, pommes de terre).",
                aliments: [{

                        name: "Céréales",
                        picto: "/img/cereale.svg",
                        description: "A Paris, il existe des 'bars à céréales' où l'on peut choisir la taille de son bol, ses cérérales, son lait et même des fruits et un nappage.",
                        suggestions: ["seules", "avec du lait chaud ou froid", "en barres", "roses des sables", "nuggets de poulet"],
                        composition: ["Gluten"]
                    },
                    {
                        name: "Maïs",
                        picto: "/img/mais.svg",
                        description: "Avec le 'maïs à éclater' on peut faire du pop corn : salé, sucré, épicé, il y en a pour tous les goûts !",
                        suggestions: ["en galette 'fajitas'", "au barbecue, grillé en épis", "éclaté en Pop Corn", "cuisson au micro-ondes", "à la vapeur", "en flocon Corn Flakes", "en semoule Polenta", "en salade", "au four", "à l'eau"],
                        composition: [""]
                    },
                    {
                        name: "Pain",
                        picto: "/img/pain.svg",
                        description: "Aux céréales, nature, en boule… Il en existe de toutes les sortes !",
                        suggestions: ["nature", "grillé", "avec de la confiture", "avec du beurre"],
                        composition: ["Gluten"]
                    },
                    {
                        name: "Petits_pois",
                        picto: "/img/petits_pois.svg",
                        description: "Malgré leur petite taille de départ, les plants de petits pois peuvent atteindre 1,80 m de hauteur.",
                        suggestions: ["en purée", "à la 'française'", "petits pois-carottes", "riz cantonais", "paëlla", "risotto", "croquettes/galettes de légumes", "jardinière de légumes"],
                        composition: [""]
                    },
                    {
                        name: "Pomme_de_terre",
                        picto: "/img/pomme_de_terre.svg",
                        description: "Au départ, on ne donnait les pommes de terre qu'aux cochons et animaux de la ferme. C'est Monsieur PARMENTIER qui les rendit 'célèbres'.",
                        suggestions: ["à l'eau", "à la vapeur", "frites", "sautées", "au four", "en salade", "en gratin", "en purée", "en soupe"],
                        composition: [""]
                    },
                    {
                        name: "Riz",
                        picto: "/img/riz.svg",
                        description: "En moyenne, un Français mange 4.5 kilos de riz par an contre près de 90 kilos pour un chinois.",
                        suggestions: ["en salade", "en gratin", "paëlla", "risotto", "riz cantonais", "riz pilaf", "sushi", "maki", "riz au lait", "gâteau", "vapeur"],
                        composition: [""]
                    },
                ]
            },
            Viandes_Poissons_Œufs: {
                portion: "Il faut en manger 1 fois par jour, 2 maximum.",
                aliments: [{

                        name: "Crevette",
                        picto: "/img/crevette.svg",
                        description: "La durée de vie d'une crevette est de 7 ans.",
                        suggestions: ["cuites", "en apéritif", "en beignet", "crues", "sautées", "en sauce", "à l'ail", "en verrines", "en bouchées vapeur", "en salade"],
                        composition: ["Poisson"]
                    },
                    {
                        name: "Œuf",
                        picto: "/img/oeuf.svg",
                        description: "Un oeuf d'autruche vaut environ 25 oeufs de poule !",
                        suggestions: ["au plat", "à la coque", "dur", "poché", "mimosa", "mollet", "en omelette", "dans une quiche", "un gâteau", "une salade de crudité"],
                        composition: ["Œuf"]
                    },
                    {
                        name: "Poulet",
                        picto: "/img/poulet.svg",
                        description: "Les poulets sont plus nombreux que les humains sur Terre.",
                        suggestions: ["à la broche", "frit", "en sauce", "en nuggets", "rôti", "basquaise", "colombo", "en tajine", "au curry", "au chorizo", "coco", "cordon bleu", "risotto"],
                        composition: ["Viande"]
                    },
                    {
                        name: "Saucisse",
                        picto: "/img/saucisse.svg",
                        description: "Le marie de la Reine d'Angleterre la surnomme parfois 'sausage', soit 'saucisse' en français.",
                        suggestions: ["à l'eau", "poêlée", "fumée", "grillée", "rougail saucisse", "currywurst", "avec des lentilles", "une choucroute", "dans un feuilleté"],
                        composition: ["Viande"]
                    },
                    {
                        name: "Saumon",
                        picto: "/img/saumon.svg",
                        description: "Le saumon peut parcourir plusieurs milliers de km au cours de sa vie et sauter jusqu'à 3 mètres de haut.",
                        suggestions: ["fumé", "en papillote", "en croûte", "pané", "à la vapeur", "poêlé", "grillé", "meunière", "à l'anglaise", "frit", "poché"],
                        composition: ["Poisson"]
                    },
                    {
                        name: "Steak",
                        picto: "/img/steak.svg",
                        description: "En 2002, un groupe de bouchers français a fait un steak de 27 mètres de long, c'est le record du monde !",
                        suggestions: ["crue", "en carpaccio", "en tartare", "cuite", "grillée", "rôtie", "bouillie", "au barbecue", "à la plancha", "en fondue", "en pierrade"],
                        composition: ["Viande"]
                    },
                ]
            },
            Produits_laitiers: {
                portion: "Il faut manger un produit laitier à chaque repas.",
                aliments: [{
                        //     name: "Beurre",
                        //     picto: "/img/.svg",
                        //     description: "C'est un aliment constitué par la matière grasse du lait. Son origine remonte à plus de 5 000 ans. Le beurre est utilisé dans la cuisine salée ou sucrée",
                        //     suggestions: ["frais", "beurre doux, salé ou demi-sel", "sur tartine"],
                        //     composition: ["Lait"]
                        // },
                        // {
                        //     name: "Crème_fraîche",
                        //     picto: "/img/.svg",
                        //     description: "Fabriqué avec du lait, celle-ci est une crème non stérilisée, maturée ou laissé en l'état, épaisse ou liquide. Elle est utilisée dans la cuisine salée ou sucrée.",
                        //     suggestions: ["en chantilly", "dans des crèmes sucrées ou salées"],
                        //     composition: ["Lait"]
                        // },
                        name: "Emmental",
                        picto: "/img/emmental.svg",
                        description: "L'emmental est un fromage à pâte dure parsemée de larges trous ronds ou ovales fabriqué à partir de lait de vache. En France, on produit au moins 1 200 variétés de fromage.",
                        suggestions: ["frais", "râpé dans les pâtes", "en salade", "sur tartine chaude"],
                        composition: ["Lait"]
                    },
                    // {
                    //     name: "Fromage Blanc",
                    //     picto: "/img/.svg",
                    //     description: "C'est un fromage à pâte fraîche obtenue par une coagulation lactique..",
                    //     suggestions: ["nature, au sucre ou avec des fruits"],
                    //     composition: ["Lait"]
                    // },
                    {
                        name: "Lait",
                        picto: "/img/lait.svg",
                        description: "Provient le plus souvent de la vache",
                        suggestions: ["frais", "chaud"],
                        composition: [""]
                    },
                    // {
                    //     name: "Yaourt",
                    //     picto: "/img/.svg",
                    //     description: "C'est du lait fermenté par le développement des seules bactéries lactiques thermophiles. Son nom vient du tuc 'yogurt' et il existe 400 dénominations différentes des laits fermentés dans le monde.",
                    //     suggestions: ["nature, au sucre ou avec des fruits", "en glace"],
                    //     composition: ["Lait"]
                    // },
                ]
            },
            Produits_sucrés: {
                portion: "Il faut en consommer avec modération.",
                aliments: [{

                        name: "Chocolat",
                        picto: "/img/chocolat.svg",
                        description: "Avant d'être mangé sous forme de tablette, le chocolat était consommé en boisson amère, sous le règne des rois de Versailles.",
                        suggestions: ["noir", "blanc", "au lait", "contenant du riz soufflé, des céréales, des noisettes", "en mousse ou glace", "en tablette", "en pâte à tartiner", "avec du lait chaud", "dans un gâteau (fondant, moelleux, muffins, brownies...)"],
                        composition: [""]
                    },
                    {
                        name: "Confiture",
                        picto: "/img/confiture.svg",
                        description: "Au Moyen-Age, la confiture était appelée 'électuaire', ce qui signifie : médicament à lécher.",
                        suggestions: ["de fruits", "de lait", "sur une tartine de pain ou de brioche", "sur les crêpes ou gaufres", "dans le fromage blanc", "en gâteau (roulé, sablé, tarte, beignet, muffin, chausson...)"],
                        composition: [""]
                    },
                    {
                        name: "Glace",
                        picto: "/img/glace.svg",
                        description: "En 1904, un glacier utilise les gaufres du stand d'à côté pour servir ses boules de glace: c'est l'invention du cornet de glace !",
                        suggestions: ["sorbet", "glace à l'italienne", "pêche Melba", "dame blanche", "chocolat liégeois", "banana split", "milk-shake", "poire Belle-Hélène", "vacherin"],
                        composition: [""]
                    },
                    {
                        name: "Miel",
                        picto: "/img/miel.svg",
                        description: "Pour produire 1 kilo de miel, il faut que 6 000 abeilles butinent près de 6 millions de fleurs pendant un peu moins de 2 semaines.",
                        suggestions: ["nougat", "dans une vinaigrette", "badigeonné sur de la viande (boeuf, canard, ribs...)", "dans le yaourt ou dans le lait chaud", "dans un gâteau (pain d'épices, madeleines, sablés..)", "sur une tartine"],
                        composition: [""]
                    },
                    {
                        name: "Pâte à tartiner",
                        picto: "/img/nutella.svg",
                        description: "A sa création, en Italie, le Nutella était vendu sous forme de blocs solides que l'on mangeait avec le pain.",
                        suggestions: ["sur une tartine de pain ou de brioche", "sur une crêpe ou une gaufre", "avec des fruits", "en gâteau (fondant, moelleux, muffin, roulé...)"],
                        composition: [""]
                    },
                    {
                        name: "Petit Beurre",
                        picto: "/img/biscuit.svg",
                        description: "Un petit beurre a 52 dents = les semaines dans l'année, 4 coins = les saisons, 24 points = les heures d'une journée et mesure 7 cm = les jours de la semaine.",
                        suggestions: ["nature", "dans un gâteau (crumble, moelleux, brownies, pudding, tiramisu, tarte, pop cake...)"],
                        composition: [""]
                    },
                ]
            }
        };
        return foodList;
    });
