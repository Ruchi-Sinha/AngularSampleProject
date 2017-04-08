'use strict';
 
angular.module('Login')
.factory('AuthenticationService',
    ['$http', '$cookieStore', '$rootScope',
    function ($http, $cookieStore, $rootScope) {
        var service = {};

        service.login = function (username, password, callback) {

            /* Dummy authentication for testing, uses $timeout to simulate api call
             ----------------------------------------------*/
                var response = { success: username === 'test' && password === 'test' };
                if(!response.success) {
                    response.message = 'Username or password is incorrect';
                }
                callback(response);


            /* Use this for real authentication
             ----------------------------------------------*/
            //$http.post('/api/authenticate', { username: username, password: password })
            //    .success(function (response) {
            //        callback(response);
            //    });
        	/*$http.get('json/LoginCredentials.json').then(function (response){
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
            */
            /////////////////

        };
 
        service.SetCredentials = function (username, password) {
 
            $rootScope.globals = {
                currentUser: {
                    username: username,
                    password: password,
                    isLoggedIn : true
                }
            };

            $cookieStore.put('globals', $rootScope.globals);
        };
 
        service.ClearCredentials = function () {
            $rootScope.globals = {};
            $cookieStore.remove('globals');
        };
 
        return service;
    }])
 
