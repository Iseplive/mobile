'use strict';

angular.module('mobile').controller('PostsCtrl', function ($scope, posts){
  $scope.posts       = posts;
  $scope.isCollapsed = true;
});


