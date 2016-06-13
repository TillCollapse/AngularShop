
(function () {
    //modul
    var sportStore = angular.module("sportsStore");
    
    sportStore
        .constant("dataUrl", "http://localhost:5000/products/")
        .controller("sportsStoreCtrl", function ($scope, $http, dataUrl) {
        $scope.data = {};
        $http.get(dataUrl)
            .success(function (data) {
                $scope.data.products = data;
            })
            .error(function (error) {
                $scope.data.error = error;
            });
        
        /*$scope.data = {
            products: [
                { name: "Produkt #1", description: "To jest produkt", category: "Kategiria #1", price: 100 },
                { name: "Produkt #2", description: "To jest produkt", category: "Kategiria #2", price: 100 },
                { name: "Produkt #3", description: "To jest produkt", category: "Kategiria #3", price: 10 },
                { name: "Produkt #4", description: "To jest produkt", category: "Kategiria #4", price: 100 }
            ]
        };*/
    });
}());