(function(){
    'use strict';
    
    angular.module('SitecoreReferenceApp').directive('recentWorks', recentWorks);
    
    function recentWorks(){
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'templates/directives/recentWorks.html',
            controller: function($scope, restData){
                restData.recentWorks()
                .$promise
                .then(function(result){ $scope.recentWorks = result; })
                .catch( function(result) { console.log('failure', result)}); 
            }    
        }
    }
})();