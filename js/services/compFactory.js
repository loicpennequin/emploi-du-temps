app.factory ('compFactory', function($q, $http){
    var competences;
    $http.get('assets/json/comp.json').then(function(response){
        competences = response.data
    });
    var deferred = $q.defer();

    return {
        getJson : function(){
            $http.get('assets/json/comp.json').then(function(response){
                deferred.resolve(response.data);
            }).catch(function(error){
                deferred.reject(error);
            })
            return deferred.promise;
        }
    }
});
