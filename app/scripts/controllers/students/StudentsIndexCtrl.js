'use strict';

angular.module('mobile').controller('StudentsIndexCtrl', function ($scope) {
  $scope.lastPromo = moment().add('y', 5).format('YYYY');
  if (moment().format('M') < 9) {
    $scope.lastPromo -= 1;
  }
});


