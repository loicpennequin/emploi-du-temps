app.directive("listecourscandidatDirective",['planningFactory', function(planningFactory){
    var controller = function ($scope) {
        $scope.addCoursFormDisplay = false;

        $scope.addFormToggle = function(){
            $scope.addCoursFormDisplay = !$scope.addCoursFormDisplay;
            $scope.getPlanning();
        }

        $scope.addCours = function(day, candidat){
            var d = $scope.planning.indexOf(day);
            for (var i = 0 ; i < $scope.planning[d].cours.length; i++){
                var cours = $scope.planning[d].cours[i];
                if ( cours.topic.nom == this.newCours.topic.nom){
                    cours.candidats.push(candidat)
                }
            }
            $scope.addCoursFormDisplay = false;
        }
    };
    return{
        scope: true,
        templateUrl : 'partials/directives/listecourscandidat.html',
        controller : controller
    }
}]);
