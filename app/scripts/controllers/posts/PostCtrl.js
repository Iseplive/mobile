'use strict';

angular.module('mobile').controller('PostCtrl', function ($scope, post, HeaderService){
  $scope.post = post;
  HeaderService.setBackButton(true);
});


