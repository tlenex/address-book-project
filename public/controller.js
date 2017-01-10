angular.module('AddressBook', []).controller('mainController', function ($scope, $http, $location) {
    $scope.addressBookElems = [];
    $scope.addressBookElem = {};

    $scope.getElements = function () {
        $http.get($location.absUrl() + 'api/all')
            .success(function (data) {
                $scope.addressBookElems = data;
                console.log(data);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };
    $scope.getElement = function (elemIndex) {
        $http.get($location.absUrl() + 'api/elementId/' + elemIndex)
            .success(function (data) {
                $scope.addressBookElem = data;
                console.log(data);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };
    $scope.searchElement = function (elemName) {
        $http.get($location.absUrl() + 'api/elementName/' + elemName)
            .success(function (data) {
                $scope.addressBookElem = data;
                console.log(data);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };

    $scope.saveElement = function () {
        var url = $location.absUrl() + 'api/elementId/' + $scope.addressBookElem.id;
        var data =  JSON.stringify($scope.addressBookElem);
        var headers = {
            'Content-Type': 'application/json'
        };
        $http.put(url, data,headers)
            .success(function (data) {
                $scope.addressBookElem = data;
                console.log(data);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };


    $scope.getElements();
});
