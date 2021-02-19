(function() {
'use strict';

  angular.module('filterApp', [])
    .controller('filterAppController', filterAppController)
    .filter('pig', PigLatinFilterFactory)
    .filter('custom', CustomFilterFactory);

  // protect from minifier
  filterAppController.$inject = ['$scope', 'customFilter', 'pigFilter'];

  function filterAppController($scope, customFilter, pigFilter) {
    $scope.string = "";
    $scope.newString = "";
    $scope.pigString = "";

    $scope.makeString = function() {
      //console.log('test');
      $scope.newString = customFilter($scope.string);
    }

    $scope.makePigString = function() {
      $scope.pigString = pigFilter($scope.string);
    }

  }

  function CustomFilterFactory() {
    return function(input) {
      input = input || ""; // catch missing input
      return input.toUpperCase();
    };
  }

  function PigLatinFilterFactory() {
    return function(input) {
      input = input || "";

      var words = getWordsArray(input);
      var pigWords = words;
      for (var i = 0; i < words.length; i++) {
        pigWords[i] = toPig(words[i]);
      }

      input = pigWords.toString().replace(/,/g, ' ').toUpperCase();

      return input;
    };
  }

  function getWordsArray(string) {
    var words = string.split(' ');
    return words;
  }

  function toPig(string) {
    string = string || "";
    string = string.slice(1) + string[0] + 'ay';
    return string;
  }

})();
