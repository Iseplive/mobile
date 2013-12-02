'use strict';

angular.module('mobile').controller('StudentCtrl', function ($scope, student, HeaderService){
  $scope.profil = student;
  
  HeaderService.pageTitle = 'Elève';
  HeaderService.setBackButton(true);
});

