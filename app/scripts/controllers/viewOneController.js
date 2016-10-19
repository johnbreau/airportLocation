angular.module('airportLocation')
.controller('viewOneController', viewOneController);

  function viewOneController($scope, $http) {

    $scope.kingCollection = [];

    $http.get("http://mysafeinfo.com/api/data?list=englishmonarchs&format=json", true).success(function(response){

    $scope.myArray = Object.keys(response).map(function (key) {return response[key]});
        console.log('kings', response);
    // ^^ this is the same as below in ES6 syntax
    // let myArray = Object.keys($scope.responses).map(key => $scope.responses[key]);
    })

    $scope.kingBuilder = function() {
      var kingElement = event.target.innerHTML.trim("\n");
      $scope.kingCollection.push(kingElement);
      $scope.forDisplay = $scope.kingCollection.join(", ");
      return $scope.forDisplay
    }

    // Weather vvv

    $scope.weatherCollection = [];

    $http.get('http://api.wunderground.com/api/2f895b6b08bd38cd/conditions/q/MO/Kansas_City.json', true).success(function(response2){

    $scope.weatherArray = Object.keys(response2).map(function (key) {return response2[key]});
        let currentTemp = response2.current_observation.feelslike_f;
    // ^^ this is the same as below in ES6 syntax
    // let myArray = Object.keys($scope.responses).map(key => $scope.responses[key]);
        console.log(currentTemp);
    })

    $scope.weatherBuilder = function() {
      var weatherElement = event.target.innerHTML.trim("\n");
      $scope.kingCollection.push(weatherElement);
      $scope.forDisplay2 = $scope.weatherCollection.join(", ");
      return $scope.forDisplay2
    }

    // Census vvv

    $scope.censusCollection = [];

    $http.get('http://api.census.gov/data/2014/acs1/variables.json', true).success(function(response3){

    $scope.censusArray = Object.keys(response3).map(function (key) {return response3[key]});
        let censusData = response3;
    // ^^ this is the same as below in ES6 syntax
    // let myArray = Object.keys($scope.responses).map(key => $scope.responses[key]);
        console.log(response3);
    })

    $scope.censusBuilder = function() {
      var censusElement = event.target.innerHTML.trim("\n");
      $scope.kingCollection.push(censusElement);
      $scope.forDisplay2 = $scope.censusCollection.join(", ");
      return $scope.forDisplay2
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
