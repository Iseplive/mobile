'use strict';

angular.module('mobile').factory('HeaderService', function ($window) {
  return {
    pageTitle: '',
    header: true,
    menuButton: true,
    backButton: false,
    backButtonCallback: function(){
      $window.history.back();
    },
    setBackButton: function (bool) {
      this.backButton = bool;
      this.menuButton = !bool;
    },
    reset: function () {
      this.pageTitle = '';
      this.header = true;
      this.menuButton = true;
      this.backButton = false;
    }
  };
});