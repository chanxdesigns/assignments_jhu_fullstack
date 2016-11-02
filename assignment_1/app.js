/**
 * Created by chanx on 11/2/2016.
 */

(function () {
    'use strict';

    // Declared the AngularJS app
    angular.module('LunchCheck', [])

    // Declared the controller
    .controller('LunchCheckController', lunchCheckController);

    // Inject Scope using the $inject service
    lunchCheckController.$inject = ['$scope'];

    /// Controller function
    function lunchCheckController ($scope) {
        // Create a lunch menu scoped variable
        $scope.lunchMenu = "";
        // Create a lunch quantity msg value holder
        $scope.lunchItemQuantityMsg = "";
        // Create a input box status highlighter
        $scope.inputStatus = "";
        // Lunch item quantity validator
        $scope.submitLunchItem = function () {
            var lunchItemArray = $scope.lunchMenu.split(',');
            if (lunchItemArray.indexOf("") === 0) {
                $scope.lunchItemQuantityMsg = "Please enter data first";
                $scope.inputStatus = "warning";
            }
            else if (lunchItemArray.length > 3) {
                $scope.lunchItemQuantityMsg = "Too much!";
                $scope.inputStatus = "success";
            }
            else {
                $scope.lunchItemQuantityMsg = "Enjoy!";
                $scope.inputStatus = "success";
            }
        }
    }
})();