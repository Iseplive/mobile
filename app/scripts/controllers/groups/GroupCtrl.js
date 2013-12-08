'use strict';

angular.module('mobile').controller('GroupCtrl', function ($scope, group, HeaderService){
  $scope.group= group;

  HeaderService.setBackButton(true);
});
