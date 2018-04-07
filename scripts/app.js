'use strict';

/**
 * @ngdoc overview
 * @name githubUserFinderApp
 * @description
 * # githubUserFinderApp
 *
 * Main module of the application.
 */
angular
  .module('githubUserFinderApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'mainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
