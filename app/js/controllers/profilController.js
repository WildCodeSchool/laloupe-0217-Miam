angular.module('app')
    .controller('ProfilController', function($scope, RewardFactory, AvatarFactory, $state) {
      var i = 0;
      var j =0;
$scope.hideModal= true;
$scope.avatars = AvatarFactory;
$scope.userName = "";


      console.log($scope.avatars[i].avatars[j].picto);
      $scope.prev = function() {
          i--;
          j = 0;
          if (i < 0) {
              i = $scope.avatars.length - 1;
          }
          $scope.currentAvatar = $scope.avatars[i].avatars[j].picto;
      };
      $scope.next = function() {
          i++;
          j = 0;

          if (i >= $scope.avatars.length) {
              i = 0;
          }
          $scope.currentAvatar = $scope.avatars[i].avatars[j].picto;
      };
      $scope.up = function() {
          j--;
          if (j < 0) {
              j = $scope.avatars[i].avatars.length - 1;
          }
          $scope.currentAvatar = $scope.avatars[i].avatars[j].picto;
      };
      $scope.down = function() {
          j++;
          if (j < 0) {
              j = $scope.avatars[i].avatars.length - 1;
          }
          $scope.currentAvatar = $scope.avatars[i].avatars[j].picto;
      };
      $scope.currentAvatar = $scope.avatars[i].avatars[j].picto;

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

$scope.userName="Jean";

$scope.goHome = function() {
$scope.hideModal= true;
  $state.go('anon.home');
  console.log($scope.hideModal);
};

$scope.validUser = function() {
$scope.userName = userName;
};
  });
