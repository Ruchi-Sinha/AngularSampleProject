
'use strict';

// declare modules
angular.module('Login', []);
angular.module('Home', ['ngMaterial', 'ngAnimate']);
angular.module('ToDoApp', ['ngMaterial', 'ngAnimate']);
angular.module('EditableTableApp', ['ngMaterial','smart-table']);

var myapp = angular.module('loginApp', ['Login','Home', 'ToDoApp', 'EditableTableApp', 'ngRoute','ngCookies']);

myapp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/',{
		templateUrl : 'module/Login/Login.html',
		controller : 'LoginController'
	}).
	when('/ToDo',{
		templateUrl : 'module/App/ToDo/ToDo.html',
		controller : 'ToDoController'
	}).
	when('/home',{
		resolve:{
			"check": function($location,$cookieStore){
				//alert($cookieStore.get('globals').currentUser.isLoggedIn);
				if(!$cookieStore.get('globals').currentUser.isLoggedIn){
					$location.path('/');
				}
			}
		},
		templateUrl : 'module/Home/home.html',
        controller : 'homeController'	
	}).
	otherwise({
		redirectTo:'/'
	});
}],['$locationProvider', function($locationProvider){
	//$locationProvider.html5Mode = true;
}]);

myapp.run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
   /* // keep user logged in after page refresh
    $rootScope.globals = $cookieStore.get('globals') || {};
    if ($rootScope.globals.currentUser) {
        //$http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
    }

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        // redirect to login page if not logged in
        if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
            $location.path('/login');
        }
    });*/
}]);

/*myapp.factory('loginData', function($http){
	function getdata(callback){
		$http({
			method: 'GET',
			url : 'json/LoginCredentials.json',
			cache: true
		}).then(callback);
	}
	return{
		login: function(name, password, callback){
			getdata(function(response){
				var validUserArray = response.data.filter(function(entry){
					return entry.name == $scope.username && entry.pwd == $scope.password;
				})[0];
				callback(validUserArray);
			});
		}
	}
});*/



/*myapp.controller('homeController', function($scope, $rootScope){
	var user = $rootScope.user;
	var pwd = $rootScope.pwd;
	//alert(user+"***"+pwd);
});*/
/*myapp.controller('loginController', function($scope, $location, $http, $rootScope){
	$scope.errorMsg = '';
	$scope.login = function(){
		$http.get('json/LoginCredentials.json').then(function successCallBack(response){
			$scope.users = response.data;
			$scope.users = $scope.users.filter(function(entry){
				//alert(entry.name+"%%%"+$scope.username+"@@"+entry.pwd+"**"+$scope.password);
				return entry.name == $scope.username && entry.pwd == $scope.password
			});
			angular.forEach($scope.users, function(entry){
				//alert(entry.name+"%%%"+$scope.username+"@@"+entry.pwd+"**"+$scope.password);
				$scope.validUser = false;
				if(entry.name == $scope.username && entry.pwd == $scope.password)
				{
					$scope.validUser = true;
					$location.path('home');
					console.log($location);
					$rootScope.user = $scope.username;
					$rootScope.pwd = $scope.password;
					$rootScope.isLoggedIn = true;
					}
		
			});
			if(!$scope.validUser)
				{
				$scope.username = '';
				$scope.password = '';
				$scope.errorMsg = 'Invalid Username or Password';
				console.log($scope.errorMsg);
				}
		});
		
	}
});*/