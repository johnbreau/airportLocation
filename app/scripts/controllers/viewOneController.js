angular.module('airportLocation')
.controller('viewOneController', viewOneController);

  function viewOneController($scope, $http) {

    $scope.promiseTester = 'test this!';

    $http.get("http://mysafeinfo.com/api/data?list=englishmonarchs&format=json", true).success(function(response){
        $scope.responses = response;
    })

  var promise = new Promise(function(resolve, reject) {

    var me = false;

    if (me === false) {
      resolve("Stuff worked!");
    }
    else {
      reject(Error("It broke"));
    }
  });

  promise.then(function(result) {
    console.log(result); // "Stuff worked!"
    }, function(err) {
      console.log(err); // Error: "It broke"
    });
  };
