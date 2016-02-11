angular.module('weatherApp')
    .directive('tempPanel', function () {

        return {
            restrict: 'E',
            templateUrl: 'pages/directivesTemplates/tempPanel.html',
            replace: true,
            controller: 'ForecastController',
            scope: {
                weatherDay: "=",
                convertToStandard: "&",
                convertDate: "&",
                dateFormat: "@"
            },
            link: function (scope, elements, attrs) {
                console.log(scope);
                console.log(elements);
                console.log(attrs);
                if (scope.weatherDay.temp.day - 273.15 <= 0) {
                    scope.freezing = true;
                } else if ((scope.weatherDay.temp.day - 273.15 > 0) && (scope.weatherDay.temp.day - 273.15 < 15)) {
                    scope.cold = true;
                } else if ((scope.weatherDay.temp.day - 273.15 >= 15) && (scope.weatherDay.temp.day - 273.15 <= 30)) {
                    scope.normal = true;
                } else if ((scope.weatherDay.temp.day - 273.15 > 30) && (scope.weatherDay.temp.day - 273.15 <= 35)) {
                    scope.hot = true;
                } else {
                    scope.superhot = true;
                }
            }

        };

    });