
  angular
    .module('airportLocation')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'assets/views/main.html'
      })
      .when('/view1', {
        templateUrl: 'assets/views/view1.html',
        controller: 'viewOneController',
      })
      .when('/view2', {
        templateUrl: 'assets/views/view2.html'
      })

      .when('/view3', {
        templateUrl: 'assets/views/view3.html'
      })


      .otherwise({
        redirectTo: '/'
      });
  }
