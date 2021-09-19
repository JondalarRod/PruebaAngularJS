'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', '$sceDelegateProvider', function($routeProvider,$sceDelegateProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
  $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    // Allow loading from our assets domain. **.
    'https://localhost:3000/**'
  ]);
}])


.controller('View1Ctrl', ['$scope', '$http', function($scope, $http) {
  //https://www.geoplugin.net/json.gp?jsoncallback=JSON_CALLBACK
  $scope.geo =  {}
  $http.jsonp('https://localhost:3000/cuentas')
  .then(function(respuesta){
    $scope.geo =  respuesta
  })
}]);