(function() {
'use strict';

angular.module('testApp', [])
  .controller('controller1', controller1)
  .controller('controller2', controller2);

controller1.$inject = ['$scope'];
function controller1($scope) {
  // console.log('Controller 1 ready.');
  $scope.string1 = "";
  $scope.action = function() {
    console.log("action");
  };
}

controller2.$inject = ['$scope'];
function controller2($scope) {
  // console.log('Controller 2 ready.');
  var items = [];
}

})();
