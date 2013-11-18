'use strict';

angular.module('mobile').service('Session', function ($rootScope, $cookies, $location, api, Config, $cacheFactory) {
  return {
    isAuthenticated: function () {
      return $cookies.mLogin !== undefined;
    },
    clearSession: function () {
      api.logout(function (){
        document.cookie = 'mLogin' + '=; expires=Thu, 01-Jan-70 00:00:01 GMT;';
        $location.path('/login');
			},function () {
				$location.path('/');
			});
    },
    setCookie: function (cookie) {
      var date = new Date();
      date.setTime(date.getTime()+(Config.cookieLength));
      document.cookie = 'mLogin' + '=' + cookie + '; expires=' + date.toGMTString() + ';path=/';
    },
    clearCache: function () {
      var $httpDefaultCache = $cacheFactory.get('$http');
      $httpDefaultCache.removeAll();
    }
  };
});

