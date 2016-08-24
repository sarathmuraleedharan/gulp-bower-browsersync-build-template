(function () {
    'use strict';
    angular
        .module('sampleApp').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'app/home/home.html'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'app/about/about.html'
            });
    });
})();
