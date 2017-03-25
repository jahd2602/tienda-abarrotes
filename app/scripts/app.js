'use strict';

/**
 * @ngdoc overview
 * @name tiendaAbarrotesApp
 * @description
 * # tiendaAbarrotesApp
 *
 * Main module of the application.
 */
angular
  .module('tiendaAbarrotesApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/landing.html',
        controller: 'LandingCtrl',
        controllerAs: 'landing'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
