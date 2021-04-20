(function() {
'use strict';

  angular.module('filterApp', [])
    .controller('filterAppController', filterAppController)
    .service('ListService', ListService)
    .service('HealthService', HealthService);

  // protect from minifier
  filterAppController.$inject = ['$scope', 'ListService', 'HealthService'];
  function filterAppController($scope, ListService, HealthService) {
    $scope.itemString = "";
    $scope.quantityString = "";
    $scope.items = []

    $scope.addItem = function() {
      ListService.addItem($scope.itemString, $scope.quantityString)
      HealthService.healthCheck(newListItem.name, newListItem.quantity)
      $scope.itemString = "";
      $scope.quantityString = "";
    }
    // in the middle of making two controllers and rewriting the add/removeItem
    // functions in the listService

    $scope.removeItem = function(i) {
      $scope.items.splice(i, 1);
    }

  }

  function ListService() {
    var service = this;

    var items = [];

    service.addItem = function(itemName, itemQuantity) {
      var newItem = {
        name: itemName,
        quantity: itemQuantity
      }
      items.push(newItem);
    };

    service.getItems = function() {
      return items;
    };
  }

  function HealthService() {
    var service = this;
    var items = [];
    service.healthCheck = function(itemName, quantity) {
      console.log("health service");
    };
  }

})();
