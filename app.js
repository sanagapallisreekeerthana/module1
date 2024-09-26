(function () {
  "use strict";

  angular
    .module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ["$scope"];

  function LunchCheckController($scope) {
    $scope.lunchItems = "";
    $scope.message = "";
    $scope.isEnjoy = false;
    $scope.isTooMuch = false;

    $scope.checkLunch = function () {
      var items = $scope.lunchItems.split(",");
      var count = items.filter(function (item) {
        return item.trim() !== "";
      }).length;

      if (count === 0) {
        $scope.message = "Please enter data first";
        $scope.isEnjoy = false;
        $scope.isTooMuch = false;
      } else if (count <= 3) {
        $scope.message = "Enjoy!";
        $scope.isEnjoy = true;
        $scope.isTooMuch = false;
      } else {
        $scope.message = "Too much!";
        $scope.isEnjoy = false;
        $scope.isTooMuch = true;
      }
    };
  }
})();
