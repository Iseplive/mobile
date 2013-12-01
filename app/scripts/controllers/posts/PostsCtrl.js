'use strict';

angular.module('mobile').controller('PostsCtrl', function ($scope, HeaderService, $rootScope, posts){
  $scope.posts       = posts;
  $scope.isCollapsed = true;
  
  HeaderService.reset();
  HeaderService.setTitle($rootScope.pageTitle);
  $rootScope.$broadcast('refreshHeader');
});


