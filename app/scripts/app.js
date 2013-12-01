'use strict';

angular.module('mobile', ['ngRoute', 'leftMenu', 'apiRoute', 'ngCookies', 'ngSanitize', 'config',
  'ui.bootstrap.transition',
  'ui.bootstrap.bindHtml',
  'ui.bootstrap.position',
  'ui.bootstrap.tooltip',
  'ui.bootstrap.popover',
  'ui.bootstrap.collapse']).config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
		.when('/', {
			templateUrl: 'views/posts/posts.html',
      controller: 'PostsCtrl',
      pageTitle: 'Publications',
      resolve:{
        posts: ['api', function (api) {
          return api.postList({param2: '1'}).$promise;
        }]
      }
    })
		.when('/login', {
			templateUrl: 'views/public/login.html',
			controller: 'LoginCtrl',
			pageTitle: 'Login',
      isPublic: true,
    })
    .when('/students/profil', {
			templateUrl: 'views/students/profil.html',
      controller: 'StudentsProfilCtrl',
      pageTitle: 'Profil',
      resolve:{
        profil: ['api', function (api) {
          return api.profil().$promise;
        }]
      }
    })
    .when('/students/list/:promo', {
			templateUrl: 'views/students/list.html',
      controller: 'StudentsListCtrl',
      pageTitle: 'Annuaire',
      resolve:{
        promos: ['api', '$route', function (api, $route) {
          return api.students({param2: $route.current.params.promo}).$promise;
        }]
      }
    })
    .when('/students/profil/:username', {
			templateUrl: 'views/students/profil.html',
      controller: 'StudentCtrl',
      pageTitle: 'Profil',
      resolve:{
        student: ['api', '$route', function (api, $route) {
          return api.student({param2: $route.current.params.username}).$promise;
        }]
      }
    })
    .when('/students/index', {
			templateUrl: 'views/students/index.html',
      controller: 'StudentsIndexCtrl',
      pageTitle: 'Annuaire',
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
    'http://storage.iseplive.localhost/'
  ]);
})
.run(function($rootScope, Session){
    $rootScope.$on('$routeChangeSuccess',
      function(event, next) {
        if (next.isPublic === undefined && !Session.isAuthenticated()) {
          Session.clearSession();
        }
        else {
          $rootScope.username = Session.getUsername();
        }
        $rootScope.pageTitle = next.pageTitle;
      });
  });