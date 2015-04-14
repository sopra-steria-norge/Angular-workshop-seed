'use strict';

angular.module('klientApp')
  .controller('MainCtrl', function ($scope) {
    $scope.tweets = [];
    $scope.leggTilTweet = function(){
      $scope.tweets.push({melding: $scope.tweet, dato: new Date()});
      $scope.tweet = "";
    };
  });
