'use strict';

angular.module('mobile').directive('pageMenu', function (HeaderService, $spMenu) {
  return {
    restrict: 'E',
    replace: true,
    scope: true,
    templateUrl: 'views/directives/menu.html',
    link: function (scope) {
      scope.$on('refreshHeader', function() {
        $spMenu.hide();
        scope.menu = HeaderService.menuButton;
      });
    }
  };
});


