var edsApp = angular.module('edsApp', ['ngRoute','LocalStorageModule']);

edsApp.config(function ($routeProvider) {
    $routeProvider
        .when('/',
            {
                controller: 'EDSController',
                templateUrl: 'edslist.html'
            })
        .when('/:empNo',
            {
                controller: 'EDSController',
                templateUrl: 'eds.html'
            })
        .otherwise({ redirectTo: '/' });
});


