angular.module('weatherApp')
    .controller('MainController', ['$scope', '$location', 'cityService', function ($scope, $location, cityService) {

        $scope.city = cityService.city;
        $scope.dias = cityService.dias;

        $scope.$watch('city', function () {
            cityService.city = $scope.city;
        });

        $scope.$watch('dias', function () {
            cityService.dias = $scope.dias;
        });

        $scope.verificarPreenchimento = function (city, dias) {
            if (city == "" || dias == "") {
                return "Preencha os campos";
            } else {
                return "Buscar";
            }
        }

        $scope.submit = function (dias) {
            $location.path('/forecast/' + dias);
        };

    }]);