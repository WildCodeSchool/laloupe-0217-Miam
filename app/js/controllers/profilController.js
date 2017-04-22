angular.module('app')
    .controller('ProfilController', function($scope) {
      var i = 0;

      var avatars = [
          {
              1: '/img/avatar.jpg',
              2: '/img/avatar1.2.jpg'
          },
          {
              1: '/img/avatar2.jpg',
              2: '/img/avatar1.2.jpg'
          }
      ];
      $scope.prev = function() {
          i--;
          if (i < 0) {
              i = avatars.length - 1;
          }
          $scope.currentAvatar = avatars[i][1];
      };
      $scope.next = function() {
          i++;
          if (i >= avatars.length) {
              i = 0;
          }
          $scope.currentAvatar = avatars[i][1];
      };
      $scope.currentAvatar = avatars[i][1];

$scope.vueModifier = false;
$scope.vueMesRecompenses = true;

$scope.modifier = function(){
  $scope.vueModifier = false;
  $scope.vueMesRecompenses = true;
};

$scope.mesRecompenses = function(){
  $scope.vueModifier = true;
  $scope.vueMesRecompenses = false;
};

  });
