

angular
    .module("myApp.products")
    .controller('productInfoController', function($scope, productsService, $routeParams){
    var productId = parseInt($routeParams.id);
    $scope.product = productsService.get(productId);
})
