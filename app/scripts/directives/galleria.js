'use strict';

angular.module('mobile').directive('galleria',function () {
  return {
    restrict: 'A',
    scope:{
      currentphoto: '=',
      attachments: '='
    },
    link: function (scope) {
      angular.forEach(scope.attachments, function (attachment) {
        attachment.image = attachment.url;
      });
      Galleria.loadTheme('../scripts/vendors/galleria-1.2.8/themes/classic/galleria.classic.min.js');
      Galleria.run('#galleria', {
        dataSource: scope.attachments,
        imageCrop:false,
        show: 0,
        wait: true,
        debug: false
      });

      Galleria.ready(function(){
        this.bind("image", function(e) {
          scope.currentphoto = this.getData(e.index).id;
          scope.$apply();
        });
      });
    }
  };
});