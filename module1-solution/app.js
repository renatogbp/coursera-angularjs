(function () {
  'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope']

  function LunchCheckController ($scope){

    $scope.foods = "";
    $scope.messageOutput = "";

    $scope.displayMessage = function () {
      if($scope.foods){
        var separator = ",";
        var arrayOfStrings = $scope.foods.split(separator);
        var count = 0;
        for (var i=0; i<arrayOfStrings.length; i++){
          if(!(arrayOfStrings[i].length == 0 || !arrayOfStrings[i].trim())){
            count += 1;
          }
        }
        if(count > 3 ){
          $scope.messageOutput = "Too much!";
        }else{
          $scope.messageOutput = "Enjoy!";
        }
      }
      else {
        $scope.messageOutput = "Please enter data first";
      }
    };

  };

})();
