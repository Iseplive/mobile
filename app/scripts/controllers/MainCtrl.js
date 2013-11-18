'use strict';

angular.module('mobile').controller('MainCtrl', function($scope, Session) {
    $scope.isAuthenticated = function () {
      return Session.isAuthenticated();
    };
});


