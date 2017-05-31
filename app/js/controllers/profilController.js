angular.module('app')
    .controller('ProfilController', function($scope, RewardFactory, AvatarFactory, $state) {
      var i = 0;
$scope.hideModal= true;

      var avatars = [
          {
              1: '/img/penguin.svg',
              2: '/img/avatar1.2.jpg'
          },
          {
              1: '/img/miam-logo.svg',
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
};

$scope.mesRecompenses = function(){
  $scope.vueModifier = true;
};

$scope.rewardList = RewardFactory;
console.log($scope.rewardList)


$scope.openModal = function() {

  $scope.hideModal= false;


}


$scope.goHome = function() {
$scope.hideModal= true;
  $state.go('anon.home');
  console.log($scope.hideModal);
}

  });
