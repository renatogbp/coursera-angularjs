(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope']

  function LunchCheckController ($scope){

    $scope.food = "something";
    $scope.messageOutput = "something2"

    $scope.displayMessage = function () {
      var displayMessageOutput = "test";
      $scope.messageOutput = "displayMessageOutput";
    };

  });

})();
