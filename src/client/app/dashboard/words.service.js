(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .factory('words', factory);

    factory.$inject = ['$resource'];

    function factory($resource) {
        var currentWord;
        var list = [];
        return {
           getAnagramFor: getAnagramFor,
           start: start
        }
        function map(word) {
            var map = {};
            for (var i = 0; i < word.length; i++) {
                var c = word.charAt(i);
                map[c] = map[c] !== undefined ? map[c] + 1 : 1;
            }
            return map;
        }
        function start(cb) {
            var call = $resource('words.json');
            var clist = call.get(function(resp) {
                list = [];
                for (var i = 0; i < resp.words.length; i++) {
                    if (resp.words[i]) {
                        var m = map(resp.words[i]);
                        list.push({
                            word: resp.words[i],
                            map: m
                        });
                    }
                }
                if (cb) cb.call(null, list);
            });
        }
        function getAnagramFor(w) {
            currentWord = w;
            var m = map(w);
            for (var i = 0; i < list.length; i++) {
                if (angular.equals(list[i].map, m)) {
                    return [list[i].word];
                }
            }
            return false;
        }
    }
})();
