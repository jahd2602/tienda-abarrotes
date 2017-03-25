'use strict';

/**
 * @ngdoc function
 * @name tiendaAbarrotesApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the tiendaAbarrotesApp
 */
angular.module('tiendaAbarrotesApp')
    .controller('LoginCtrl', function ($scope, $timeout, $location) {
        $scope.connecting = false;

        $scope.doLogin = function () {
            if ($scope.loginForm.$valid) {
                // Should do credentials checking throug network

                // Mock connection delay
                $scope.connecting = true;
                $timeout(function () {
                    $location.path('/admin')
                }, 500);
            }
        };
    });
