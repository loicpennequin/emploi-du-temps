app.factory ('planningFactory', function($q, $http){
    var planning = [],
          deferred = $q.defer();

    return {
        getJson : function(){
            $http.get('assets/json/planning.json').then(function(response){
                deferred.resolve(response.data);
            }).catch(function(error){
                deferred.reject(error);
            })
            return deferred.promise;
        },
        getPlanning : function(){
            return planning;
        },
        addCours : function(day, cours){
            planning[day].cours.push(cours);
        },
        deleteCours : function(day, cours){
            planning[day].cours.splice(cours, 1)
        },
        editCours : function(day, cours, data){
            planning[day].cours[cours].start = data.start;
            planning[day].cours[cours].end = data.end;
            planning[day].cours[cours].salle = data.salle;
            planning[day].cours[cours].topic= data.topic;
        },
        addCandidat : function(cours, candidat){

        }
    }
});
