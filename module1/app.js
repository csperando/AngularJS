
(function() {

  angular.module('lunchCheck', [])
    .controller('lunchCheckController', lunchCheckController);

  lunchCheckController.$inject = ['$scope', '$filter', '$injector'];

  function lunchCheckController($scope, $filter, $injector) {
    $scope.string = "";

    $scope.message = "";

    $scope.check = function() {
      var items = $scope.string.split(',');
      //console.log(items);
      //console.log(items.length);

      if (items.length == 1) {
        if (items[0] == "") {
          $scope.message = "Please enter data first";
        } else {
          $scope.message = "Enjoy!";
        }
      } else if (items.length <= 3) {
        $scope.message = "Enjoy!";
      } else if (items.length > 3) {
        $scope.message = "Too much!";
      } else {
        // not sure what happened to get here
        $scope.message = "Please enter data first";
      }

    }
  }

})();

// minified js
// !function(){function e(e,n,s){e.string="",e.message="",e.check=function(){var n=e.string.split(",");1==n.length?""==n[0]?e.message="Please enter data first":e.message="Enjoy!":n.length<=3?e.message="Enjoy!":n.length>3?e.message="Too much!":e.message="Please enter data first"}}angular.module("lunchCheck",[]).controller("lunchCheckController",e),e.$inject=["$scope","$filter","$injector"]}();
