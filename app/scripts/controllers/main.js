'use strict';

/**
 * @ngdoc function
 * @name homeTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the homeTestApp
 */
angular.module('homeTestApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
