'use Strict';

angular.module('Users')
.controller('UserController', ['userService', '$mdSidenav', '$mdBottomSheet',
    function (userService, $mdSidenav, $mdBottomSheet) {
	var self = this;
	self.selected = null;
	self.users =[];
	self.selectUser = selectUser;
	self.toggleList =toggleUsersList;
	self.share =share;
	
	//Load all registered user
	userService
	.loadAllUsers()
	.then(function(users){
		self.users = [].concat(users);
		self.selected = users[0];
	});
	
	function toggleUsersList(){
		$mdSidenav('left').toggle();
	}
	
	function selectUser(user){
		//self.selected = angular.isNumber(user)? scope.user[]
		console.log('hello');
	}

}]);
