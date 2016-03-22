var app = angular.module('iamduc', []).controller('IamducCtrl', function ($scope, $window) {

	$scope.skills = [
		{name: "Swift", color: "label-warning"},
		{name: "Objective C", color: "label-default"},
		{name: "HTML5/CSS", color: "label-success"},
		{name: "AngularJS", color: "label-info"},
		{name: "Ionic", color: "label-danger"},
		{name: "NodeJS", color: "label-default"}];

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
			case 'sk':
				url = "skype:ducnn01?call";
				break;
			default:
				break;

		}
		if (url) {
			$window.open(url, '_blank');
		}
	}
});
