(function(){
    'use strict';
    
    angular.module('SitecoreReferenceApp').directive('clientComments', clientComments);
    
    function clientComments(){
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'templates/directives/clientComments.html',
            controller: function($scope, restData){
                restData.clientComments()
                .$promise
                .then(function (result) { $scope.clientComments = result;})
                .catch( function(result) { console.log('failure', result)}); 
             }
        }
    }
})();