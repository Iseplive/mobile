'use strict';

angular.module('mobile').controller('MediaCtrl', function ($scope, media){
  $scope.media = media;
  
  $scope.setIcon = function (category) {
    switch(category){
      case '1':
        return 'icon-photo';
      case '2':
        return 'icon-media';
      case '3':
        return 'icon-post';
      case '4':
        return 'icon-podcast';
      case '10':
        return 'icon-post';
    }
  };
});


