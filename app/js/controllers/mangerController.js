angular.module('app')
    .controller('MangerController', function($scope) {
      $(".manger li").click(function(){
        $(this).addClass("selected");
      });
    });
