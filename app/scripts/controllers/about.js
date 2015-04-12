'use strict';

/**
 * @ngdoc function
 * @name homeTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the homeTestApp
 */
angular.module('homeTestApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
