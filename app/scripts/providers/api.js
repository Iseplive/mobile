'use strict';

angular.module('apiRoute', ['ngResource']).factory('api', ['$resource',
  function($resource){
    return $resource('http://rest.iseplive.localhost/:param1/', {}, {
      login: {method:'POST', params:{param1:'signin'}},
      logout: {method:'GET',  params:{param1:'logout'}}
    });
  }]);


