var myAppP2 = angular.module('myApp.view2', ['ngRoute'])

myAppP2.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

myAppP2.controller('View2Ctrl', function($scope){
  $scope.haveYouFavorited=function(){
    if($scope.item.favorited==false){
      return 'You have no yet pressed the favorite button.'
    }
    else{
      return 'You have pressed the favorite button!'
    }
  }
  $scope.item={favorited:false};
});
