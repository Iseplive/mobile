'use strict';

angular.module('mobile').controller('StudentsListCtrl', function ($scope, promos, HeaderService){
  $scope.promos = promos;
  HeaderService.setBackButton(true);
});


