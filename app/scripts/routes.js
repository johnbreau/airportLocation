
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
        controllerAs: 'voCtrl'
      })
      .when('/view2', {
        templateUrl: 'assets/views/view2.html'
      })

      .otherwise({
        redirectTo: '/'
      });
  }
