app.directive("coursDirective",function(){
    var controller = function ($scope) {
        $scope.editFormDisplay = false;

        $scope.editFormToggle = function(){
        $scope.editFormDisplay = !$scope.editFormDisplay;
        }

        $scope.editFormClose = function(){
            $scope.editFormDisplay = false;
        }

    };
    return{
        scope: true,
        templateUrl : 'partials/directives/cours.html',
        controller : controller
    }
});
