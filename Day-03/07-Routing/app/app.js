 var myApp = angular.module('myApp', ['myApp.products','myApp.customers','ngRoute']);
myApp.config(function($routeProvider){
    $routeProvider
        .otherwise({
            redirectTo : '/products'
        });
});
