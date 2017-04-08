'use strict';

angular.module('Users')
.service('userService', UserService);

function UserService($q){
	var Users= [
		{
			name: 'Julia Roberts',
			content: 'Famous actress.Hollywood star.'
		},
		{
			name: 'Anjelina Jolie',
			content: 'Famous actress.Hollywood star.'
		},
		{
			name: 'Maryl Steep',
			content: 'Famous actress.Hollywood star.'
		}
	]
}

