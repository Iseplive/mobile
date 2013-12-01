'use strict';

angular.module('mobile').directive('spinner', function() {
  return {
    scope: true,
    link: function(scope, element) {
      element.addClass('spinner');

      scope.$on('showSpinner', function() {
        element.addClass('show');
      });

      scope.$on('hideSpinner', function() {
        element.removeClass('show');
      });
    }
  };
});