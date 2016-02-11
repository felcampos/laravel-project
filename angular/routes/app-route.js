angular.module('weatherApp').config(function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'MainController'
        })
        .when('/forecast', {
            templateUrl: 'pages/forecast.html',
            controller: 'ForecastController'
        })
        .when('/forecast/:days', {
            templateUrl: 'pages/forecast.html',
            controller: 'ForecastController'
        })
        .otherwise({
            redirectTo: '/'
        })
});