'use strict';

angular.module('apiRoute', ['ngResource']).factory('api', ['$resource', 'Config',
  function($resource, Config){
    return $resource(Config.apiUri + ':param1/:param2', {}, {
      login:    {              method: 'POST', params:{param1: 'signin'}},
      logout:   {              method: 'GET',  params:{param1: 'logout'}},
      postList: {cache: true,  method: 'GET',  params:{param1: 'posts',         param2: '@page'}, isArray: true},
      post:     {cache: true,  method: 'GET',  params:{param1: 'post',          param2: '@id'}},
      profil:   {cache: true,  method: 'GET',  params:{param1: 'profil'}},
      students: {cache: true,  method: 'GET',  params:{param1: 'students',      param2: '@promo'}},
      student:  {cache: true,  method: 'GET',  params:{param1: 'student',       param2: '@username'}},
      groups:   {cache: true,  method: 'GET',  params:{param1: 'associations'}, isArray: true},
      group:    {cache: true,  method: 'GET',  params:{param1: 'association',   param2: '@name'}},
      media:    {cache: true,  method: 'GET',  params:{param1: 'media'},        isArray: true}
    });
  }]);


