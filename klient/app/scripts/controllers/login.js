'use strict';

angular.module('klientApp')
  .controller('LoginCtrl', ["$scope", "BrukerService", function ($scope, brukerService) {
    $scope.login = function(){
      brukerService.login($scope.brukernavn, $scope.passord); // burde returnere promise
    };
  }]);
