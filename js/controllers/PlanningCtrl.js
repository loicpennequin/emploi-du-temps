app.controller("PlanningCtrl", function($http, planningFactory, compFactory, roomFactory, $scope){

    //############################################
    //########GESTION DU PLANNING##############
    //############################################

    $scope.planning = [];

    planningFactory.getJson().then(function(data){
        $scope.planning = data;
    });

    $scope.getPlanning = function(){
        planningFactory.getPlanning()
        $scope.planning = planningFactory.getPlanning()
    };

    $scope.addCours = function(day){
        var d = $scope.planning.indexOf(day);
        this.newCours.candidats = [];
        planningFactory.addCours(d, this.newCours);
        $scope.getPlanning();
    };

    $scope.deleteCours = function(day, cours){
        var d = $scope.planning.indexOf(day);
        var c = $scope.planning[d].cours.indexOf(cours)
        planningFactory.deleteCours(d,c);
        $scope.getPlanning();
    };

    $scope.editCours = function(day, cours){
        var d = $scope.planning.indexOf(day);
        var c = $scope.planning[d].cours.indexOf(cours)
        planningFactory.editCours(d,c,this.editCours)
        $scope.getPlanning();
    }

    //############################################
    //########GESTION DES COMPETENCES#########
    //############################################

    $scope.competences = []
    $scope.compListDisplay = false;
    $scope.addCompFormDisplay = false;

    compFactory.getJson().then(function(data){
        $scope.competences = data;
    });

    $scope.getColor = function(comp){
        return comp.color
    };

    $scope.compList = function(){
        $scope.compListDisplay = !$scope.compListDisplay;
    };

    $scope.addCompForm = function(){
        $scope.addCompFormDisplay = !$scope.addCompFormDisplay;
    };

    $scope.addComp = function(){
        $scope.competences.push(this.newCompInput);
        $scope.addCompFormDisplay = false;
    };

    $scope.deleteComp = function(comp){
        $scope.competences.splice($scope.competences.indexOf(comp),1);
    };


    //############################################
    //########GESTION DES SALLES################
    //############################################

    $scope.rooms = []
    $scope.roomListDisplay = false;
    $scope.addRoomFormDisplay = false;

    roomFactory.getJson().then(function(data){
        $scope.rooms = data;
    });

    $scope.roomList = function(){
        $scope.roomListDisplay = !$scope.roomListDisplay;
    };

    $scope.addRoomForm = function(){
        $scope.addRoomFormDisplay = !$scope.addRoomFormDisplay;
    };

    $scope.addRoom = function(){
        $scope.rooms.push(this.newRoomInput);
        $scope.addRoomFormDisplay = false;
    };

    $scope.deleteRoom = function(salle){
        $scope.rooms.splice($scope.rooms.indexOf(salle),1);
    };


});
