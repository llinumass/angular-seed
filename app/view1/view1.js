angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope,$location){
  $scope.who="What is your name?";
  $scope.newName='';
  $scope.buttonName='Next'
  $scope.ableToProceed=false;
  $scope.goTo = function(newPath){
    $location.path(newPath)
  }
  $scope.capitalizeThis=function(str){
    return str.charAt(0).toUpperCase()+str.slice(1);
  }
  $scope.changeName = function(){
    if($scope.newName.length == 0){
      $scope.who="Just type in something.";
    }
    else{
      $scope.who="Hello, "+$scope.capitalizeThis($scope.newName);
      $scope.ableToProceed=true;
    }
  };
});
