var app = angular.module('iamduc', []).controller('IamducCtrl', function ($scope, $window) {
	$scope.skills = ["Swift", "Objective C", "HTML5/CSS", "AngularJS", "Ionic", "NodeJS"];
	$scope.gotoPage = function (page) {
		var url = "";
		switch (page) {
			case 'fb':
				url = "http://fb.com/ducit";
				break;
			case 'tt':
				url = "http://twitter.com/duccuimia";

				break;
			case 'gp':
				//url = "https://plus.google.com/+NgọcĐứcNguyễn";
				break;
			case 'gh':
				console.log("https://github.com/ducito/");
				break;
			case 'li':
				url = "https://vn.linkedin.com/in/nnduc/";
				break;
			default:
				break;

		}
		if (url){
			$window.open(url, '_blank');
		}
	}
});
