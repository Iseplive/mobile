'use strict';

angular.module('mobile').directive('history', function($window) {
  return {
    scope: true,
    link: function(scope, element) {
      element.on('click', function() {
        $window.history.back();
      });
    }
  };
});