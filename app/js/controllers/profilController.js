angular.module('app')
    .controller('ProfilController', function($scope, RewardFactory, AvatarFactory, $state) {
      var i = 0;
$scope.hideModal= true;
$scope.avatars = AvatarFactory;
console.log($scope.avatars);
      // var avatars = [
      //     {
      //         1: '/img/penguin.svg',
      //         2: '/img/avatar1.2.jpg'
      //     },
      //     {
      //         1: '/img/miam-logo.svg',
      //         2: '/img/avatar1.2.jpg'
      //     }
      // ];


      console.log($scope.avatars[i].avatars[0].picto);
      $scope.prev = function() {
          i--;
          if (i < 0) {
              i = $scope.avatars.length - 1;
          }
          $scope.currentAvatar = $scope.avatars[i].avatars[0].picto;
      };
      $scope.next = function() {
          i++;
          if (i >= $scope.avatars.length) {
              i = 0;
          }
          $scope.currentAvatar = $scope.avatars[i].avatars[0].picto;
      };
      $scope.currentAvatar = $scope.avatars[i].avatars[0].picto;

$scope.vueModifier = false;
$scope.vueMesRecompenses = true;

$scope.modifier = function(){
  $scope.vueModifier = false;
};

$scope.mesRecompenses = function(){
  $scope.vueModifier = true;
};

$scope.rewardList = RewardFactory;
console.log($scope.rewardList);


$scope.openModal = function() {

  $scope.hideModal= false;


};


$scope.goHome = function() {
$scope.hideModal= true;
  $state.go('anon.home');
  console.log($scope.hideModal);
};

  });
