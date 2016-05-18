(function(){
    'use strict';
    
    angular.module('SitecoreReferenceApp').directive('teamMemberProfiles', teamMemberProfiles);
    
    function teamMemberProfiles(){
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'templates/directives/teamMemberProfiles.html',
            controller: function($scope, restData){
                restData.teamMemberProfiles()
                .$promise
                .then(function(result) { $scope.teamMemberProfiles = result; })
                .catch( function(result) { console.log('failure', result)}); 
            }
        }
    }
})();