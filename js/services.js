angular.module('F1App.services', []).
  factory('ergastAPIservice', function($http) {

    var ergastAPI = {};

    ergastAPI.getDrivers = function() {
      return $http({
        method: 'JSONP', 
        url: 'http://ergast.com/api/f1/2015/driverStandings.json?callback=JSON_CALLBACK'
      });
    }

    return ergastAPI;
  });