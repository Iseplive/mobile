'use strict';

angular.module('mobile').directive('galleria',function () {
  return {
    restrict: 'E',
    replace: true,
    scope:{
      attachments: "="
    },
    templateUrl: 'views/directives/galleria.html',
    link: function (scope, element, attrs) {
      angular.forEach(scope.attachments, function (attachment) {
        attachment.image = attachment.url;
      });

      Galleria.loadTheme('../scripts/vendors/galleria-1.2.8/themes/classic/galleria.classic.min.js');
      Galleria.run('#galleria', {
        dataSource: scope.attachments,
        imageCrop:false,
        show: 0,
        wait: true
      });
    }
  };
});