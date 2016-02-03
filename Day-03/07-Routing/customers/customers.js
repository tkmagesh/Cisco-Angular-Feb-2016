angular
    .module("myApp.customers", ['ngRoute'])
    .config(function($routeProvider){
        $routeProvider.when('/customers',{
            templateUrl : 'customers/templates/customersTemplate.html'
        });
    })
