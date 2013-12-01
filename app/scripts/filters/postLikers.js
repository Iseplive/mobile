'use strict';

angular.module('mobile').filter('postLikers', function () {
  return function(likers) {
    if (likers === undefined || !likers.length) {
      return;
    }
    var text = '';
    angular.forEach(likers, function (liker) {
      text += '<p>' + liker.firstname + ' ' + liker.lastname + '</p>';
    });
    return text;
  };
});