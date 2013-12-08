'use strict';

angular.module('mobile').controller('GroupsListCtrl', function ($scope, groups){
  $scope.groups = groups;
  $scope.isCollapsed = true;
});


