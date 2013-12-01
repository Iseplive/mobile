'use strict';

angular.module('mobile').controller('StudentCtrl', function ($scope, student, $rootScope, HeaderService){
  $scope.profil = student;
  
  HeaderService.reset();
  HeaderService.setTitle('Elève');
  HeaderService.setBackButton(true);
  $rootScope.$broadcast('refreshHeader');
});

