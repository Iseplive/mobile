'use strict';

angular.module('mobile').controller('StudentsProfilCtrl', function ($scope, HeaderService, profil, $rootScope){
  $scope.profil = profil;
  
  HeaderService.reset();
  HeaderService.setTitle($rootScope.pageTitle);
  $rootScope.$broadcast('refreshHeader');
});


