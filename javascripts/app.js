"use strict";

var app = angular.module("TodoApp", []);

app.controller("NavCtrl", function($scope){
	$scope.navItems = [{name:"Logout"},{name:"All Items"},{name:"New Item"}];
});

app.controller("TodoCtrl", function($scope){
	$scope.welcome = "hello";
	$scope.showListView = true;
	$scope.newTask = {};
	$scope.items =[
	{
		id: 0,
		task:"Mow the lawn",
		isCompleted: true,
		assignedTo:"Zoe"
	},
	{
		id: 1,
		task:"Beer run",
		isCompleted: false,
		assignedTo:"William"
	},
	{
		id: 2,
		task:"Order Jets",
		isCompleted: false,
		assignedTo:"Nathan"
	}
	];

	$scope.allItems=function(){
		console.log("you clicked all items");
		$scope.showListView = true;
	}

	$scope.newItem=function(){
		console.log("you clicked new item");
		$scope.showListView = false;
	}

	$scope.addNewItem=function(){
		$scope.newTask.isCompleted = false;
		$scope.newTask.id = $scope.items.length;
		console.log("newTask in function", $scope.newTask);
		$scope.items.push($scope.newTask);
		$scope.newTask = "";
		$scope.showListView = true;
	}
});

