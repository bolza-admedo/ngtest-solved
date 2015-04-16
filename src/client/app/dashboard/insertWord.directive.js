(function() {
    'use strict';

	angular
	    .module('app.dashboard')
	    .directive('insertWord', insertWord);

	function insertWord() {
		return {
			restrict: 'E',
			replace: false,
			template: '<input name="word" ng-change="onChange()" ng-model="currentWord"></input>',
			link: function(scope, elem, attrs) {
				
			},
			controller: function($scope) {
				$scope.currentWord = '';
				$scope.onChange = function() {
					
				}
			}
		}
	}
})();
