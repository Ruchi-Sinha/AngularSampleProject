'use strict';

angular.module('Home')
.controller('homeController',['$scope','$http', '$rootScope', '$location', '$cookieStore','AuthenticationService','$mdSidenav',
	'$mdBottomSheet','$mdToast',
	function($scope, $http, $rootScope, $location,$cookieStore, AuthenticationService,$mdSidenav, $mdBottomSheet, $mdToast){		
	$scope.user = $cookieStore.get('globals').currentUser.username;
	$scope.items = [
		{name:'Phone', icon:'phone', icon_url: 'icon/phone_24px.svg'},
		{name:'Twitter', icon:'twitter', icon_url: 'icon/twitter_24px.svg'},
		{name:'Google+', icon:'google+', icon_url: 'icon/google_24px.svg'},
		{name:'hangout', icon:'hangout', icon_url: 'icon/hangout_24px.svg'}
	]
	$scope.selected = null;
	$http.get('json/sidenav.json').then(function(response){
		//alert('in sidenav option');
		$scope.menuOptions = response.data;
		$scope.selected = $scope.menuOptions[0];
		//console.log('get',response.data);
	});
	
	$scope.selectOption = function(selected){
		$scope.selected = selected;
	}
	
	$scope.showChilds = function(selectedMenuOption){
		//alert('hi you clicked the menu before changing open option'+selectedMenuOption.open);
		selectedMenuOption.open = !selectedMenuOption.open;
		//alert('after changing'+selectedMenuOption.open);
		if(selectedMenuOption.name == 'Favourite Actress')
			{
			$scope.selected = {
					"name" : "Favourite Actress",
					"content" : "HiIiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
					"img_url" : "https://en.wikipedia.org/wiki/Julia_Roberts#/media/File:Julia_Roberts_Cannes_2016_3.jpg"
					};
			}
		if(selectedMenuOption.name == 'Favourite Actor')
		{
		$scope.selected = {
				"name" : "Favourite Actor",
				"content" : "Hellllllllllllllllllllllllllllooooooooooooo",
				"img_url" : "https://en.wikipedia.org/wiki/Julia_Roberts#/media/File:Julia_Roberts_Cannes_2016_3.jpg"
				};
		}
		if(selectedMenuOption.name == 'ToDo App')
		{
		$scope.selected = {
				"name" : "ToDo App",				
				};
		}
		if(selectedMenuOption.name == 'Editable Table')
		{
		$scope.selected = {
				"name" : "Editable Table",				
				};
		}
		
	}
	
	$scope.share = function(selected){
		//alert("in share");
		$mdBottomSheet.show({
			controller : 'homeController',
			//controllerAs:'vm',
			templateUrl : 'module/BottomSheet/bottomSheet.html',
			parent :angular.element(document.querySelector('#content')),
			clickOutsideToClose: false
		}).then(function() {
		      $mdToast.show(
		              $mdToast.simple($scope.clickedItem)
		                .textContent($scope.clickedItem + ' clicked!')
		                .position('top right')
		                .hideDelay(1500)
		            );
		      });
		 	}
	
	$scope.performAction = function(itemClicked){
		$mdBottomSheet.hide();
	    $scope.clickedItem = itemClicked.name;
	    alert(itemClicked.name);
	}
	
	$scope.toggleList = function(){
		$mdSidenav('left').toggle();
	}
}]);


angular.module('Home').
config(function($mdThemingProvider){
	  $mdThemingProvider.theme('default')
	  .primaryPalette('lime')
	  .accentPalette('orange');
})