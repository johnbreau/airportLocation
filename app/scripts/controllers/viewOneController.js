angular.module('airportLocation')
.controller('viewOneController', viewOneController);

  function viewOneController($scope, $http) {

    $scope.kingCollection = [];

    $http.get("http://mysafeinfo.com/api/data?list=englishmonarchs&format=json", true).success(function(response){

    $scope.myArray = Object.keys(response).map(function (key) {return response[key]});
    // ^^ this is the same as below in ES6 syntax
    // let myArray = Object.keys($scope.responses).map(key => $scope.responses[key]);
    })

    $scope.kingBuilder = function() {
      var kingElement = event.target.innerHTML.trim("\n");
      $scope.kingCollection.push(kingElement);
      $scope.forDisplay = $scope.kingCollection.join(", ");
    }

  };

// http://api.census.gov/data/2014/acs1/variables.json

// var promise = new Promise(function(resolve, reject) {
//
// var me = false;
//
// if (me === false) {
//   resolve("Stuff worked!");
// }
// else {
//   reject(Error("It broke"));
// }
// });
//
// promise.then(function(result) {
// console.log(result); // "Stuff worked!"
// }, function(err) {
//   console.log(err); // Error: "It broke"
// });
