'use strict';

angular.module('mobile').controller('LoginCtrl', function ($scope, api){
	$scope.signin = function () {
		if ($scope.login !== '' && $scope.password !== '') {
			var output = {
				login: $scope.login,
				password: $scope.password
			};
			api.login(output, function (data){
				alert(data.id);
			},
			function (e) {
				alert(e.message);
			});
		}
	};
});

