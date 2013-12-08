'use strict';

angular.module('mobile').directive('pageHeader',function (HeaderService) {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'views/directives/header.html',
    link: function (scope) {
      scope.$on('refreshHeader', function() {
        scope.pageTitle          = HeaderService.pageTitle;
        scope.header             = HeaderService.header;
        scope.menuButton         = HeaderService.menuButton;
        scope.backButton         = HeaderService.backButton;
        scope.backButtonCallback = HeaderService.backButtonCallback;
      });
    }
  };
});


