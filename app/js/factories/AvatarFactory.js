angular.module('app')
    .factory('AvatarFactory', function() {
        return [{
                famille: "",
                avatars: [{
                        name: "penguin",
                        picto: "/img/penguin.svg"
                    },
                    {
                        name: "miam",
                        picto: "/img/miam-logo.svg"
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
                        name: "",
                        picto: ""
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
                        name: "",
                        picto: ""
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
            }

        ];
    });
