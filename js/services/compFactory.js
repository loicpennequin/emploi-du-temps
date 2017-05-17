app.factory ('compFactory', function($q, $http){
    var competences = [],
          deferred = $q.defer();

    return {
        getJson : function(){
            $http.get('assets/json/comp.json').then(function(response){
                competences = response.data
                deferred.resolve(response.data);
            }).catch(function(error){
                deferred.reject(error);
            })
            return deferred.promise;
        }
    }
});
