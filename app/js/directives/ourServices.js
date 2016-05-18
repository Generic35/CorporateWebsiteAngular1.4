(function(){
    'use strict';
    
    angular.module('SitecoreReferenceApp').directive('ourServices', ourServices);
    
    function ourServices(){
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'templates/directives/ourServices.html',
            controller: function($scope, restData){
                restData.services()
                .$promise
                .then(function(result){ $scope.services = result; })
                .catch( function(result) { console.log('failure', result)}); 
            }    
        }
    }
})();