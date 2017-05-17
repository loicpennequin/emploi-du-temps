app.factory ('roomFactory', function($q, $http){
    var rooms = [];
          deferred = $q.defer();

    return {
        getJson : function(){
            $http.get('assets/json/rooms.json').then(function(response){
                rooms = response.data
                deferred.resolve(response.data);
            }).catch(function(error){
                deferred.reject(error);
            })
            return deferred.promise;
        }
    }
});
