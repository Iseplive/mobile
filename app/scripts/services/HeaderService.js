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
    setTitle : function (newTitle) {
      this.pageTitle = newTitle;
    },
    setHeader: function (bool) {
      this.header = bool;
    },
    setBackButton: function (bool) {
      this.backButton = bool;
      this.menuButton = !bool;
    },
    setMenuButton: function (bool) {
      this.menuButton = bool;
      this.backButton = !bool;
    },
    reset: function () {
      this.pageTitle = '';
      this.header = true;
      this.menuButton = true;
      this.backButton = false;
    }
  };
});