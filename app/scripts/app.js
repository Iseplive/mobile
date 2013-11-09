'use strict';

angular.module('mobile', ['ngRoute', 'leftMenu', 'apiRoute']).config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
		.when('/', {
			templateUrl: 'views/index.html',
			title: 'Home',
			setHeader: true,
			setMenu: true
    })
		.when('/login', {
			templateUrl: 'views/login.html',
			controller: 'LoginCtrl',
			title: 'Login',
			setHeader: false,
			setMenu: false
    });

    //.otherwise({redirectTo: '/'});
  }
])
.run( ['$location', '$rootScope',
  function( $location, $rootScope ){
    $rootScope.$on('$routeChangeSuccess', 
      function(event, currentRoute, previousRoute) {
        $rootScope.title = currentRoute.title;
        $rootScope.setHeader = currentRoute.setHeader;
        $rootScope.setMenu = currentRoute.setMenu;
      });
  }]);