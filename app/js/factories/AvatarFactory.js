angular.module('app')
    .factory('AvatarFactory', function() {
        var avatarList = [{
                famille: "",
                avatars: [{
                        name: "penguin",
                        picto: "/img/penguin.svg"
                    },
                    {
                        name: "",
                        picto: ""
                    },
                    {
                        name: "",
                        picto: ""
                    }
                ]
            },
            {
                famille: "",
                avatars: [{
                        name: "lion",
                        picto: "/img/lion.svg"
                    },
                    {
                        name: "lion red",
                        picto: "/img/lion-red.svg"
                    },
                    {
                        name: "lion green",
                        picto: "/img/lion-green.svg"
                    },
                    {
                        name: "lion orange",
                        picto: "/img/lion-orange.svg"
                    }
                ]
            },
             {
                famille: "",
                avatars: [{
                        name: "cat",
                        picto: "/img/cat.svg"
                    },
                    {
                        name: "cat red",
                        picto: "/img/cat-red.svg"
                    },
                    {
                        name: "cat green",
                        picto: "/img/cat-red.svg"
                    },
                    {
                        name: "cat orange",
                        picto: "/img/cat-orange.svg"
                    }
                ]
            }

        ];
        return avatarList;
    });
