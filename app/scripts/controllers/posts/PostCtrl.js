'use strict';

angular.module('mobile').controller('PostCtrl', function ($scope, post, HeaderService){
  $scope.post = post;
  $scope.currentphoto = 0;
  HeaderService.setBackButton(true);
});


