var app = angular.module('iamduc', []).controller('IamducCtrl', function ($scope, $window) {
	$scope.myAvatar = md5("ducnn01@gmail.com");
	$scope.skills = [
		{name: "Swift", color: "label-warning"},
		{name: "Objective C", color: "label-default"},
		{name: "HTML5/CSS", color: "label-success"},
		{name: "AngularJS", color: "label-info"},
		{name: "Ionic", color: "label-danger"},
		{name: "NodeJS", color: "label-default"},
		{name: "React", color: "label-success"},
		{name: "React Native", color: "label-info"}];

	$scope.projects = [


	];

	$scope.moods = [
		{content:"I'm an iOS developer, web developer and freelancer also."},
		{content:"I am a passionate about computers and problem solving."},
		{content:"Learn anything from anyone – anywhere, love opensource."},
		{content:"And want to make my career as a full stack developer."},
		{content:"Don't fear, don't regret!"}
	];

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
				url = "https://github.com/ducito/" ;
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
