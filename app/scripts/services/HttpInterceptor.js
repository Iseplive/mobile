'use strict';

angular.module('mobile').config(['$httpProvider','$provide',
  function($httpProvider, $provide) {
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.headers.post['Content-Type'] = 'multipart/form-data';
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.withCredentials = true;

    $provide.factory('HttpInterceptor',function($q, $location, $rootScope) {
      return{
        'request': function(config) {
          if (config.url.match('http') !== null) {
            $rootScope.$broadcast('showSpinner');
          }
          // do something on success
          return config || $q.when(config);
        },
        'response': function (response) {
          if (response.config.url.match('http') !== null) {
            $rootScope.$broadcast('hideSpinner');
          }
          return response || $q.when(response);
        },
        'responseError': function(rejection) {
          $rootScope.$broadcast('hideSpinner');
          switch (rejection.status) {
            case 401:
              document.cookie = 'mLogin' + '=; expires=Thu, 01-Jan-70 00:00:01 GMT;';
              $location.path('/login');
              return;
          }
          return $q.reject(rejection);
        }
      };
    });

    $httpProvider.interceptors.push('HttpInterceptor');
  }]);


