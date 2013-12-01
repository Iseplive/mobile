'use strict';

angular.module('mobile').controller('LoginCtrl', function ($scope, api, Session, $location, $rootScope, HeaderService){
	$scope.signin = function () {
		if ($scope.login !== '' && $scope.password !== '') {
			var output = {
				login: $scope.login,
				password: $scope.password
			};
			api.login(output, function (data){
        Session.setCookie(data);
        $location.path('/');
			},function (e) {
				alert(e.data.message);
			});
		}
    else {
      alert('Veuillez entrer un identifiant et un mot de passe');
    }
    
    HeaderService.reset();
    HeaderService.setHeader(false);
    $rootScope.$broadcast('refreshHeader');
	};
});

