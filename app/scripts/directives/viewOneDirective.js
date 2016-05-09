angular.module('airportLocation')
.directive('viewOneDirective', function(){
  return {
    restrict: 'EA',
    templateUrl: 'assets/views/navigationdirective.html',
    controller: 'viewOneController',
    controllerAs: 'voCtrl',
  };
});
