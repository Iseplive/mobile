'use strict';

angular.module('apiRoute', ['ngResource']).factory('api', ['$resource', 'Config',
  function($resource, Config){
    return $resource(Config.apiUri + ':param1/:param2', {}, {
      login:    {              method: 'POST', params:{param1: 'signin'}},
      logout:   {              method: 'GET',  params:{param1: 'logout'}},
      postList: {cache: false, method: 'GET',  params:{param1: 'posts',   param2: '@page'}, isArray: true},
      profil:   {cache: true,  method: 'GET',  params:{param1: 'student'}}
    });
  }]);


