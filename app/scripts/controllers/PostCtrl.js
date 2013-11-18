'use strict';

angular.module('mobile').controller('PostCtrl', function ($scope, api, posts){
  $scope.posts = posts;
});


