"use strict";

app.controller("AuthCtrl", function($scope, $rootScope, $loctation, AuthFactory, UserFactory){

	// let logMeIn = function(loginStuff){
	// 	AuthFactory.authenticate(loginStuff).then(function(didLogin){
	// 		console.log("didLogin", didLogin);
	// 		return UserFactory.getUser(didLogin.uid);
	// 	}).then(function(userCreds){
	// 		$rootScope.user = userCreds;
	// 		$scope.login = {};
	// 		$scope.register = {};
	// 		$loctation.url("/items/list");
	// 	});
	// };

	$scope.loginContainer = true;
	$scope.registerContainer = false;

	$scope.setLoginContainer = function(){
		$scope.loginContainer = true;
		$scope.registerContainer = false;
	};

	$scope.setRegisterContainer = function(){
		$scope.registerContainer = true;
		$scope.loginContainer = false;
	};

	$scope.registerUser = function(registerNewUser){
		AuthFactory.registerWithEmail(registerNewUser).then(function(didRegister){
			registerNewUser.uid = didRegister.uid;
			console.log("didRegister", didRegister);
			return UserFactory.addUser(registerNewUser);
		}).then(function(registerComplete){
			logMeIn(registerNewUser);
		});
	};

	$scope.loginUser = function(loginNewUser){
		logMeIn(loginNewUser);
	};
});