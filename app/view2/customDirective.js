myAppP2.directive("favoriteButton", [function() {
    return {
        scope: {
          item: '='
        },
        template: '<button class="favoriteMe" ng-class="{favoriteMeClicked: pressed}" ><span ng-click="favoriteItem(item)">{{word}}</span></button>',
        link: function($scope,element,attrs){
          $scope.pressed=false;
          $scope.favoriteItem=function(whatItem){
            whatItem.favorited=!(whatItem.favorited);
            $scope.pressed=!($scope.pressed);
            if($scope.pressed == false){
              $scope.word="Favorite!"
            }
            else{
              $scope.word="Unfavorite"
            }
          };
          $scope.word="Favorite!"
        }
    }
}]);
