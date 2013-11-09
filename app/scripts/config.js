'use strict';

angular.module('mobile').config(['$httpProvider',
  function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.headers.post["Content-Type"] = "multipart/form-data";
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  }]);

