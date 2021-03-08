(function() {
'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyController(ShoppingListCheckOffService) {
    var buy = this;
    buy.toBuyList = ShoppingListCheckOffService.getToBuyList();
    buy.toBuyMessage = ShoppingListCheckOffService.getToBuyMessage();

    buy.checkOff = function(itemIndex) {
      ShoppingListCheckOffService.checkOff(itemIndex);
      buy.toBuyMessage = ShoppingListCheckOffService.getToBuyMessage();
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought = this;
    bought.boughtList = ShoppingListCheckOffService.getBoughtList();
  }

  function ShoppingListCheckOffService() {

    var initialToBuyList = [
      {
        name: 'cookies',
        quantity: 10
      },
      {
        name: 'eggs',
        quantity: 12
      },
      {
        name: 'bacon',
        quantity: 4
      },
      {
        name: 'peanut butter',
        quantity: 1
      },
      {
        name: 'apples',
        quantity: 6
      }
    ];

    var initialBoughtList = [
      /*{
        name: 'cookies',
        quantity: 10
      }*/
    ];

    var service = this;
    var toBuyList = initialToBuyList;
    var boughtList = initialBoughtList;

    service.checkOff = function(itemIndex) {
      boughtList.push(toBuyList[itemIndex]);
      toBuyList.splice(itemIndex, 1);
    }

    service.getToBuyMessage = function() {
      if (toBuyList.length === 0) {
        return "That's everything!";
      } else {
        // use ng-if to show message when list is empty
      }
    }

    service.getToBuyList = function() {
      return toBuyList;
    }

    service.getBoughtList = function() {
      return boughtList;
    }

  }


})();

// test minified js: success!
//!function(){"use strict";function t(t){var e=this;e.toBuyList=t.getToBuyList(),e.toBuyMessage=t.getToBuyMessage(),e.checkOff=function(i){t.checkOff(i),e.toBuyMessage=t.getToBuyMessage()}}function e(t){this.boughtList=t.getBoughtList()}angular.module("ShoppingListCheckOff",[]).controller("ToBuyController",t).controller("AlreadyBoughtController",e).service("ShoppingListCheckOffService",function(){var t=[{name:"cookies",quantity:10},{name:"cookies",quantity:10}],e=[];this.checkOff=function(i){e.push(t[i]),t.splice(i,1)},this.getToBuyMessage=function(){if(0===t.length)return"That's everything!"},this.getToBuyList=function(){return t},this.getBoughtList=function(){return e}}),t.$inject=["ShoppingListCheckOffService"],e.$inject=["ShoppingListCheckOffService"]}();
