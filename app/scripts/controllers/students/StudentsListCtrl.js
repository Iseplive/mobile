'use strict';

angular.module('mobile').controller('StudentsListCtrl', function ($scope, promos, $rootScope, HeaderService){
  $scope.promos = promos;

  HeaderService.reset();
  HeaderService.setTitle($rootScope.pageTitle);
  HeaderService.setBackButton(true);
  $rootScope.$broadcast('refreshHeader');
});


