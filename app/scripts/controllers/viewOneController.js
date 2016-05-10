angular.module('airportLocation')
.controller('viewOneController', viewOneController);

  function viewOneController($scope, $http) {

    $scope.promiseTester = 'test this!';

    var promise = new Promise(function(resolve, reject) {
    // do a thing, possibly async, then…
    var me = false;

    if (me === false) {
      resolve("Stuff worked!");
    }
    else {
      reject(Error("It broke"));
    }
  });

  };
