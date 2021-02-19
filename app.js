(function(window) {
'use strict';

  angular.module('testApp', [])
    .controller('testAppController', testAppController);

    testAppController.$inject = ['$scope', '$filter'];

    function testAppController($scope, $filter, $injector) {
      $scope.string = "";

      $scope.sendMessage = function() {
        return 'this is a message';
      }

    };

})(window);
