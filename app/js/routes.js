angular.module('app')
    .config(function($stateProvider, $urlRouterProvider, AccessLevels) {
        $stateProvider
            .state('anon', {
                abstract: true,
                data: {
                    access: AccessLevels.anon
                },
                views: {
                    'navbar@': {
                        templateUrl: 'anon/navbar.html',
                        controller: 'NavbarController'
                    }
                }
            })
            .state('anon.home', {
                url: '/',
                views: {
                    'content@': {
                        templateUrl: 'anon/home.html',
                        controller: 'MainController'
                    }
                }
            })
            .state('anon.tutoriel', {
                url: '/tutoriel',
                views: {
                    'content@': {
                        templateUrl: 'anon/tutoriel.html',
                        controller: 'TutorielController'
                    }
                }
            })
            .state('anon.manger', {
                url: '/manger',
                views: {
                    'content@': {
                        templateUrl: 'anon/manger.html',
                        controller: 'MangerController'
                    }
                }
            })
            .state('anon.gouter', {
                url: '/gouter',
                views: {
                    'content@': {
                        templateUrl: 'anon/gouter.html',
                        controller: 'GouterController'
                    }
                }
            })
            .state('anon.contreIndication', {
                url: '/contreIndication',
                views: {
                    'content@': {
                        templateUrl: 'anon/contreIndication.html',
                        controller: 'ContreIndicationController'
                    }
                }
            })
            .state('anon.connexionCompte', {
                url: '/connexionCompte',
                views: {
                    'content@': {
                        templateUrl: 'anon/connexionCompte.html',
                        controller: 'ConnexionCompteController'
                    }
                }
            })
            .state('anon.avatar', {
                url: '/avatar',
                views: {
                    'content@': {
                        templateUrl: 'anon/avatar.html',
                        controller: 'AvatarController'
                    }
                }
            })
            .state('anon.profil', {
                url: '/profil',
                views: {
                    'content@': {
                        templateUrl: 'anon/profil.html',
                        controller: 'ProfilController'
                    }
                }
            })
            .state('anon.login', {
                url: '/login',
                views: {
                    'content@': {
                        templateUrl: 'anon/login.html',
                        controller: 'LoginController'
                    }
                }
            })
            .state('anon.register', {
                url: '/register',
                views: {
                    'content@': {
                        templateUrl: 'anon/register.html',
                        controller: 'RegisterController'
                    }
                }
            });
        $stateProvider
            .state('user', {
                abstract: true,
                url: '/user',
                views: {
                    'navbar@': {
                        templateUrl: 'user/navbar.html',
                        controller: 'NavbarController'
                    }
                },
                data: {
                    access: AccessLevels.user
                }
            })
            .state('user.dashboard', {
                url: '/dashboard',
                views: {
                    'content@': {
                        templateUrl: 'user/dashboard.html',
                        controller: 'DashboardController'
                    }
                }
            })
            .state('user.profile', {
                url: '/profile',
                views: {
                    'content@': {
                        templateUrl: 'user/profile.html',
                        controller: 'ProfileController'
                    }
                }
            });
        $urlRouterProvider.otherwise('/');
    });
