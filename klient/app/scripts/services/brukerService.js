'use strict';

angular.module('klientApp')
  .factory('BrukerService', [ '$http', function($http){
    var bruker;

    return {
      login: function(username, password){
        var requestUser = {user: {username: username,
                                  password: password}};
        $http.post('http://twitter.lazy.wtf/api/v1/login', requestUser)
          .success(function(){
            // 2xx - success httpkode
            bruker = requestUser;
            console.log("login success", bruker);
          })
          .error(function(data, status){
            // 4xx/5xx - error
            console.log("login error " + status);
          });
      }
    };
  }]);
