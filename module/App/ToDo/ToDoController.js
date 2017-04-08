'use strict';

angular.module('ToDoApp').
controller('ToDoController',['$scope', function($scope){
	$scope.toDos=[
		{'title' : 'Build an app', 'done' : false}
	];
	$scope.toDosActive=[];
	$scope.toDosCompleted = []; 
	$scope.currentNavItem= "All";
	$scope.newToDo = '';
	$scope.addToDo = function(){
		if($scope.newToDo != ''){
		$scope.toDos.push({'title': $scope.newToDo, 'done': false});
		$scope.currentNavItem= "All";
			$scope.newToDo = '';
		}	
	}
	$scope.deleteCompleted = function(){
		$scope.toDos = $scope.toDos.filter(function(item){
			return !item.done;
			
		})
		if($scope.currentNavItem == 'Completed')
			{
			$scope.toDosCompleted = [];
			}
	}
	$scope.goto= function(tab){
		if(tab == "Active")
			{
			$scope.toDosActive = $scope.toDos.filter(function(item){
				if(item.done == false)
					return $scope.toDosActive.push(item);
				
			})
			}
		if(tab == "Completed")
			{
			$scope.toDosCompleted = $scope.toDos.filter(function(item){
				if(item.done == true)
					return $scope.toDosCompleted.push(item);
				
			})
			}
	}
	
	$scope.CheckedinActiveMode = function(){
		$scope.toDosActive = $scope.toDosActive.filter(function(item){
			return !item.done;
		})
	}
}])