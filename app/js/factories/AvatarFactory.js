angular.module('app')
    .factory('AvatarFactory', function() {
        return [{
            categorie: "Familles",
            avatars: [{
                    name: "",
                    picto: "",
                    isCurrent: "",
                    isLocked: ""
                },
                {
                    name: "",
                    picto: "",
                    isCurrent: "",
                    isLocked: ""
                },
                {
                    name: "",
                    picto: "",
                    isCurrent: "",
                    isLocked: ""
                },
            ]
        }];
    });
