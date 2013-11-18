'use strict';

angular.module('mobile').controller('LogoutCtrl', function (Session){

			Session.clearSession();

});


