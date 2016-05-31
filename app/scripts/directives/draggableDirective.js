angular.module('airportLocation').directive('dragMe', function() {
  return {
    restrict: 'A',
    controller: 'draggableController',
    controllerAs: 'dragCtrl',
    link: function(scope, elm, attrs) {
      var options = scope.$eval(attrs.dragMe); //allow options to be passed in
      elm.draggable(options);
    }
  };
});
