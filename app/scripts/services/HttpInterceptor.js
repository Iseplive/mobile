'use strict';

angular.module('mobile').config(['$httpProvider','$provide',
  function($httpProvider, $provide) {
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.headers.post["Content-Type"] = "multipart/form-data";
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.withCredentials = true;

    $provide.factory('HttpInterceptor',['$q','$location', function($q, $location) {
        return{
          'request': function(config) {
            // do something on success
            return config || $q.when(config);
          },
          'responseError': function(rejection) {
            switch (rejection.status) {
              case 401:
                document.cookie = 'mLogin' + '=; expires=Thu, 01-Jan-70 00:00:01 GMT;';
                $location.path('/login');
                return;
            }
            return $q.reject(rejection);
          }
        };
    }]);

    $httpProvider.interceptors.push('HttpInterceptor');
  }]);


