
(function () {
    //modul
    var sportStore = angular.module("sportsStore");
    
    sportStore.controller("sportsStoreCtrl", function ($scope) {
        $scope.data = {
            products: [
                { name: "Produkt #1", description: "To jest produkt", category: "Kategiria #1", price: 100 },
                { name: "Produkt #2", description: "To jest produkt", category: "Kategiria #2", price: 100 },
                { name: "Produkt #3", description: "To jest produkt", category: "Kategiria #3", price: 10 },
                { name: "Produkt #4", description: "To jest produkt", category: "Kategiria #4", price: 100 }
            ]
        };
    });
}());