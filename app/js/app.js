(function(){
    'use strict';
    
    angular.module('SitecoreReferenceApp', ['ngResource', 'ngRoute'])
        .config(function($routeProvider, $locationProvider){
            $routeProvider.when('/Home', {
                templateUrl: 'templates/Home.html',
                controller: 'HomeController'
            });
            $routeProvider.when('/Services', {
                templateUrl: 'templates/Services.html'
            });
            $routeProvider.when('/About', {
                templateUrl: 'templates/About.html'
            });
            $routeProvider.when('/Portfolio', {
                templateUrl: 'templates/Portfolio.html'
            });
            $routeProvider.when('/Blog', {
                templateUrl: 'templates/Blog.html'
            });
            $routeProvider.when('/Contact', {
                templateUrl: 'templates/Contact.html'
            });
            $routeProvider.when('/NotFound', {
                templateUrl: 'templates/404.html'
            });
            $routeProvider.when('/BlogItem', {
                templateUrl: 'templates/BlogItem.html'
            });
            $routeProvider.when('/Pricing', {
                templateUrl: 'templates/Pricing.html'
            });
            $routeProvider.when('/Shortcodes', {
                templateUrl: 'templates/Shortcodes.html'
            });
            $routeProvider.otherwise( { redirectTo: '/Home'});
            
            $locationProvider.html5Mode(true);
        })
})();