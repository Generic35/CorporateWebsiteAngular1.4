(function(){
    'use strict'
    
    angular.module('SitecoreReferenceApp').factory('restData', restData);
    
    function restData($resource){
        var clientCommentsUrl = '/data/clientComments', 
        locationsUrl = '/data/locations', 
        recentWorksUrl ='/data/recentWorks', 
        servicesUrl = '/data/services',
        teamMemberProfilesUrl = '/data/teamMemberProfiles';
        
        function setupResource(url){
            return $resource(url + '/:id', {id:'@id'}, {"getAll": {method: "GET", isArray: true, params: {something: "foo"}}});
        }
        
        return {
            clientComments : function() { return setupResource(clientCommentsUrl).query() },
            locations :  function() { return setupResource(locationsUrl).query() },
            recentWorks :  function() { return setupResource(recentWorksUrl).query() },
            services :  function() { return setupResource(servicesUrl).query() },
            teamMemberProfiles:  function() { return setupResource(teamMemberProfilesUrl).query() },
        }
    }  
})();