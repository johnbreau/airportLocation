angular.module('airportLocation')
.controller('viewOneController', viewOneController);

  function viewOneController($scope, $http) {

    $http.get("http://mysafeinfo.com/api/data?list=englishmonarchs&format=json", true).success(function(response){
      $scope.responses = response;
      let myArray = Object.keys($scope.responses).map(key => $scope.responses[key]);
      console.log(myArray[0]);
    })

    var myEl = angular.element(document.getElementsByClassName('clickerClass'));

    $scope.kingBuilder = function() {
      alert('hello booty!');
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
