angular.module('app').config(function($stateProvider, $urlRouterProvider, AccessLevels) {
  $stateProvider.state('anon', {
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
  }).state('anon.home', {
    url: '/',
    views: {
      'content@': {
        templateUrl: 'anon/home.html'
      }
    }
  }).state('anon.manger', {
    url: '/manger',
    views: {
      'content@': {
        templateUrl: 'anon/manger.html',
        controller: 'MangerController'
      }
    }
  }).state('anon.gouter', {
    url: '/gouter',
    views: {
      'content@': {
        templateUrl: 'anon/gouter.html',
        controller: 'GouterController'
      }
    }
  }).state('anon.contreIndication', {
    url: '/contreIndication',
    views: {
      'content@': {
        templateUrl: 'anon/contreIndication.html',
        controller: 'ContreIndicationController'
      }
    }
  }).state('anon.connexionCompte', {
    url: '/connexionCompte',
    views: {
      'content@': {
        templateUrl: 'anon/connexionCompte.html'
      }
    }
  }).state('anon.avatar', {
    url: '/avatar',
    views: {
      'content@': {
        templateUrl: 'anon/avatar.html',
        controller: 'AvatarController'
      }
    }
  }).state('anon.login', {
    url: '/login',
    views: {
      'content@': {
        templateUrl: 'anon/login.html',
        controller: 'LoginController'
      }
    }
  }).state('anon.register', {
    url: '/register',
    views: {
      'content@': {
        templateUrl: 'anon/register.html',
        controller: 'RegisterController'
      }
    }
  });
  $stateProvider.state('user', {
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
  }).state('user.profil', {
    url: '/profil',
    views: {
      'content@': {
        templateUrl: 'user/profil.html',
        controller: 'ProfilController'
      }
    }
  }).state('user.avatar', {
    url: '/avatar',
    views: {
      'content@': {
        templateUrl: 'user/avatar.html',
        controller: 'AvatarController'
      }
    }
  });
  $urlRouterProvider.otherwise('/');
});
