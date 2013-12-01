'use strict';

angular.module('mobile').service('Session', function ($rootScope, $cookies, $location, api, Config, $cacheFactory) {
  return {
    isAuthenticated: function () {
      return $cookies.mLogin !== undefined;
    },
    getUsername: function () {
      return $cookies.username;
    },
    clearSession: function () {
      api.logout(function (){
        document.cookie = 'mLogin' + '=; expires=Thu, 01-Jan-70 00:00:01 GMT;';
        $location.path('/login');
			},function () {
				$location.path('/');
			});
    },
    setCookie: function (data) {
      var date = new Date();
      date.setTime(date.getTime()+(Config.cookieLength));
      document.cookie = 'mLogin' + '=' + data.cookie + '; expires=' + date.toGMTString() + ';path=/';
      document.cookie = 'username' + '=' + data.username + '; expires=' + date.toGMTString() + ';path=/';
      $rootScope.username = data.username;
    },
    clearCache: function () {
      var $httpDefaultCache = $cacheFactory.get('$http');
      $httpDefaultCache.removeAll();
    }
  };
});

