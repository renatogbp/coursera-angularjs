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
        $scope.color = "color:green";
        $scope.borderColor = "border-color:green";
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
        $scope.color = "color:red";
        $scope.borderColor = "border-color:red";
        $scope.messageOutput = "Please enter data first";
      }
    };

  };

})();
