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
    .when('/post/:id', {
			templateUrl: 'views/posts/post.html',
      controller: 'PostCtrl',
      pageTitle: 'Publication',
      resolve:{
        post: ['api', '$route', function (api, $route) {
          return api.post({param2: $route.current.params.id}).$promise;
        }]
      }
    })
    .when('/media', {
			templateUrl: 'views/posts/media.html',
      controller: 'MediaCtrl',
      pageTitle: 'Média',
      resolve:{
        media: ['api', function (api) {
          return api.media().$promise;
        }]
      }
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
      pageTitle: 'Annuaire'
    })
    .when('/groups', {
			templateUrl: 'views/groups/groups.html',
      controller: 'GroupsListCtrl',
      pageTitle: 'Associations',
      resolve:{
        groups: ['api', function (api) {
          return api.groups().$promise;
        }]
      }
    })
    .when('/group/:name', {
			templateUrl: 'views/groups/group.html',
      controller: 'GroupCtrl',
      pageTitle: 'Association',
      resolve:{
        group: ['api', '$route', function (api, $route) {
          return api.group({param2: $route.current.params.name}).$promise;
        }]
      }
    })
    .when('/logout', {
      templateUrl: 'views/public/login.html',
			controller: 'LogoutCtrl'
    })
    .when('/login', {
			templateUrl: 'views/public/login.html',
			controller: 'LoginCtrl',
			pageTitle: 'Login',
      isPublic: true
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
.run(function($rootScope, Session, HeaderService){
  $rootScope.$on('$routeChangeSuccess', function(event, next) {
    if (next.isPublic === undefined && Session.isAuthenticated() === undefined) {
      Session.clearSession();
    }
    else {
      $rootScope.username = Session.getUsername();
    }
    $rootScope.pageTitle = next.pageTitle;
    HeaderService.reset();
    HeaderService.pageTitle = next.pageTitle;
  });

  $rootScope.$on('$viewContentLoaded', function() {
    $rootScope.$broadcast('refreshHeader');
  });
});