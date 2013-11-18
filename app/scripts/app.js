'use strict';

angular.module('mobile', ['ngRoute', 'leftMenu', 'apiRoute', 'ngCookies', 'ngSanitize', 'config']).config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
		.when('/', {
			templateUrl: 'views/post.html',
      controller: 'PostCtrl',
      isPrivate: true,
			title: 'Home',
      setHeader: true,
			setMenu: true,
      resolve:{
        posts: ['api', function (api) {
          return api.postList({param2: '1'}).$promise;
        }]
      }
    })
		.when('/login', {
			templateUrl: 'views/public/login.html',
			controller: 'LoginCtrl',
			title: 'Login',
      isPrivate: false,
			setHeader: false,
			setMenu: false
    })
    .when('/profil', {
			templateUrl: 'views/profil.html',
      controller: 'ProfilCtrl',
      isPrivate: true,
			title: 'Profil',
      setHeader: true,
			setMenu: true,
      resolve:{
        profil: ['api', function (api) {
          return api.profil().$promise;
        }]
      }
    })
    .when('/logout', {
      templateUrl: 'views/public/login.html',
			controller: 'LogoutCtrl',
    })

    .otherwise({redirectTo: '/'});
  }
])
.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'http://storage.iseplive.localhost/']);
})
.run(function($rootScope, Session){
    $rootScope.$on('$routeChangeSuccess',
      function(event, next, current) {
        if (next.isPrivate && !Session.isAuthenticated()) {
          //Session.clearSession();
        }
        $rootScope.title = next.title;
        $rootScope.setHeader = next.setHeader;
        $rootScope.isPrivate = next.isPrivate;
        $rootScope.setMenu = next.setMenu;

        /*$rootScope.title = $filter('objectMerge')($rootScope.title, currentRoute.title);
        $filter('objectMerge')($rootScope.setMenu, currentRoute.setMenu);
        $rootScope.setHeader = $filter('objectMerge')($rootScope.setHeader, currentRoute.setHeader);*/
      });
  });