(function(){
    'use strict';
    
    angular.module('SitecoreReferenceApp').directive('locations', locations);
    
    function locations(){
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'templates/directives/locations.html',
            controller: function($scope, restData){
                restData.locations()
                .$promise
                .then(function(result) { $scope.locations = result;})
                .catch(function(result) { console.log('failure', result)}); 
            }
        }   
    }
})();