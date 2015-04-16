(function () {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['words'];
    /* @ngInject */
    function DashboardController(words) {
        var vm = this;
        vm.currentWord = '';
        vm.onChange = function() {
            vm.results = words.getAnagramFor(vm.currentWord);    
        }
        words.start(function(list) {
            console.log(list)
        });
    }
})();
