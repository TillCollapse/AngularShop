
(function () {
    //modul
    var sportStore = angular.module("sportsStore");
    
    sportStore
        .constant("dataUrl", "http://localhost:5000/products")
        .constant("orderUrl", "http://localhost:5000/orders")
        .controller("sportsStoreCtrl", function ($scope, $http, $location, dataUrl, orderUrl, cart) {
        $scope.data = {};
        $http.get(dataUrl)
            .success(function (data) {
                $scope.data.products = data;
            })
            .error(function (error) {
                $scope.data.error = error;
            });
        $scope.sendOrder = function (shippingDetails) {
            var order = angular.copy(shippingDetails);
            order.products = cart.getProducts();
            console.log(order);
            $http.post(orderUrl, order)
                .success(function (data) {
                    $scope.data.orderId = data.id;
                    cart.getProducts().length = 0;
                    console.log(1);
                })
                .error(function error() {
                    $scope.data.orderError = error;
                    console.log(2);
                }).finally (function () {
                    $location.path("/complete");
                    console.log(3);
                });
        };
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