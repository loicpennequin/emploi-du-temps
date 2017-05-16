app.controller("CandidatsCtrl", function($http,planningFactory, $scope){

    //################################################
    //###########GESTION LISTE CANDIDATS############
    //################################################
    $scope.candidats =  []
    $scope.getCandidats = function(){
        $http.get('assets/json/candidats.json').then(function(response){
            $scope.candidats = response.data
        });
    }
    $scope.getCandidats();
    $scope.addCandidatDisplay = false;

    $scope.addCandidatForm = function(){
        $scope.addCandidatDisplay = ! $scope.addCandidatDisplay;
    }

    $scope.addCandidat = function() {
        $scope.candidats.push(this.newCandInput);
        $scope.newCandInput = '';
        $scope.addCandidatDisplay = false;
    };

    $scope.deleteCandidat = function(candidat){
        $scope.candidats.splice($scope.candidats.indexOf(candidat),1);
    }

    //################################################
    //###########GESTION COURS CANDIDATS###########
    //################################################

    $scope.planning = [];

    planningFactory.getJson().then(function(data){
        $scope.planning = data;
        $scope.hasCandidat = function(cours, candidat){
            var result = false;
            cours.candidats.forEach(function(elem,key){
                if ( elem == candidat ){
                    result = true
                }
            })
            return result
        };
    });

    $scope.getPlanning = function(){
        $scope.planning = planningFactory.getPlanning();
    }

    $scope.addCours = function(day, candidat){
        var d = $scope.planning.indexOf(day);
        for (var i = 0 ; i < $scope.planning[d].cours.length; i++){
            var cours = $scope.planning[d].cours[i];
            if ( cours.topic.nom == this.newCours.topic.nom){
                cours.candidats.push(candidat)
            }
        }
        $scope.getPlanning()
        console.log($scope.planning);
    }

    $scope.getColor = function(cours){
        return cours.topic.color
    };
});
