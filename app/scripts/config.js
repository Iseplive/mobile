'use strict';

angular.module('config', []).service('Config', function () {
    var conf = {
      apiUri: 'http://rest.iseplive.localhost/'
    };
    return conf;
  });

