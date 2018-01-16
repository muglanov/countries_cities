var app = angular.module('ccApp', []);
app.controller('ccController', function ($scope, $http) {
    $scope.creds = {
        username: '',
        password: ''
    };
    $scope.authSuccessfull = false;
    $scope.errorInProcessing = false;
    $scope.inProcess = false;
    $scope.countries = [];
    $scope.selectedCountry = void 0;
    $scope.sort = void 0;
    $scope.orderProperty = '+title';

    $scope.handleAuth = function () {
        $scope.inProcess = true;
        $http({method: 'POST', url: 'http://localhost:5000/auth', data: $scope.creds})
            .then(function (response) {
                $scope.authSuccessfull = true;
                $http({method: 'GET', url: 'http://localhost:5000/countries'})
                    .then(function (response) {
                        $scope.countries = response.data;
                    }, function (response) {
                        console.log(response, 'error');
                    });
            }, function (response) {
                $scope.errorInProcessing = true
            });
    };
    $scope.handleBack = function () {
        $scope.selectedCountry = void 0;
        $scope.cities = [];
    };

    $scope.handleSort = function () {
        $scope.orderProperty = $scope.orderProperty === '-title' ? '+title' : '-title';
    }




    $scope.clickHandler = function (id, name) {
        $scope.selectedCountry = name;
        $http({method: 'GET', url: 'http://localhost:5000/cities/' + id})
            .then(function (response) {
                $scope.cities = response.data;
            }, function (response) {
                console.log(response, 'error');
            });
    };
});