angular.module('weatherApp')
    .controller('ForecastController', ['$scope', '$routeParams', '$resource', 'cityService', function ($scope, $routeParams, $resource, cityService) {

        $scope.city = cityService.city;
        $scope.days = $routeParams.days || '2';
        cityService.dias = $scope.days;

        //Isso protege o get, informando que será apenas dados JSON.
        $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {
            callback: "JSON_CALLBACK"
        }, {
            get: {
                method: "JSONP"
            }
        });

        $scope.weatherResult = $scope.weatherAPI.get({
            q: $scope.city,
            cnt: $scope.days,
            appid: "2de143494c0b295cca9337e1e96b00e0"
        });

        $scope.convertToCelcius = function (tempK) {
            return Math.round(tempK - 273.15);
        }

        $scope.convertToDate = function (dt) {
            return new Date(dt * 1000);
        }


    }]);