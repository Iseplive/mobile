'use strict';

angular.module('mobile').controller('PostsCtrl', function ($scope, $location, posts){
  $scope.posts       = posts;
  $scope.isCollapsed = true;
  
  $scope.sendToSinglePost = function (post) {
    if (post.category_id === '1') {
      $location.path('/post/' + post.id)
    }
  }
});


