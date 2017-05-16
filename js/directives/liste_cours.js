app.directive("listecoursDirective",function(){
    var controller = function ($scope) {
        $scope.addFormDisplay = false;
        $scope.editFormDisplay = false;

        $scope.addFormToggle = function(){
        $scope.addFormDisplay = !$scope.addFormDisplay;
        }

        $scope.addFormClose = function(){
            $scope.addFormDisplay = false;
        }
    };
    return{
        scope: true,
        templateUrl : 'partials/_listecours.html',
        controller : controller
    }
});
