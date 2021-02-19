(function(window) {
'use strict';

  angular.module('testApp', [])
    .controller('testAppController', function($scope, $filter, $injector) {
      $scope.name = "";
      $scope.nameValue = 0;

      $scope.upper = function() {
        var upCase = $filter('uppercase');
        $scope.name = upCase($scope.name);
      };

      function test() {
        return 'test';
      }

      /*
      $scope.displayNumeric = function() {
        var total = 0;
        for (var i = 0; i < $scope.name.length; i++) {
          total += $scope.name.charCodeAt(i);
        }
        $scope.nameValue = total;
      }
      */

    });

})(window);
