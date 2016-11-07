(function () {
  'use strict'
angular.module('CompraApp',[])
.controller('ShoppingListController1',ShoppingListController1)
.controller('ShoppingListController2',ShoppingListController2)
.factory('ShoppingListFactory',ShoppingListFactory);

ShoppingListController1.$inject = ['ShoppingListFactory'];
function ShoppingListController1(ShoppingListFactory){
  var list1 = this;
  var shoppingList = ShoppingListFactory();
  list1.items = shoppingList.getItems();
  list1.removeItem = function (itemIndex) {
    shoppingList.removeItem(itemIndex);
  };
};

ShoppingListController2.$inject = ['ShoppingListFactory'];
function ShoppingListController2(ShoppingListFactory){
  var list2 = this;
  var shoppingList = ShoppingListFactory();
  list2.itemName="";
  list2.quantity = "";
  list2.bought = shoppingList.getBought();
  list2.addFoodToBought = function (){
    shoppingList.addFoodToBought(list2.itemName,list2.quantity);
  };
};

function ShoppingListService(){
  var service = this;
  var bought =[];
  var items = [
    {
      name : "Cookies",
      quantity: "10"
    },
    {
      name : "Milk",
      quantity: "3"
    },
    {
      name : "Chocolate",
      quantity: "8"
    },
    {
      name : "Donuts",
      quantity: "15"
    },
    {
      name : "Coffe",
      quantity: "5"
    }
  ];

  service.removeItem = function(itemIndex){
    items.splice(itemIndex,1);
  };
  service.addFoodToBought = function(itemName,quantity){
    var item = {
      name : itemName,
      quantity : quantity
    };
    bought.push(item);
  };
  service.getBought = function () {
    return bought;
  };
  service.getItems = function () {
    return items;
  };
}
function ShoppingListFactory(){
  var factory = function(){
    return new ShoppingListService();
  };
  return factory;
}

})();
