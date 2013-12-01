'use strict';

angular.module('mobile').controller('LogoutCtrl', function (Session, $rootScope, HeaderService){
	Session.clearSession();
  
  HeaderService.reset();
  HeaderService.setHeader(false);
  $rootScope.$broadcast('refreshHeader');
});


