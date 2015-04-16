/* jshint -W117, -W030 */
describe('Service', function() {
    var service, $httpBackend;
    beforeEach(module('app'));
    beforeEach(module('app.dashboard'));

    var wordsList = [
        'anagram'
    ];

    beforeEach(inject(function($injector) {
        $httpBackend = $injector.get('$httpBackend');
        service = $injector.get('words');
        $httpBackend.expectGET('words.json').respond({'words': wordsList});
        service.start();
        $httpBackend.flush();
    }));
    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });
    describe('.getAnagramFor', function() {
        it('should return getAnagramFor', function() {
            var res = service.getAnagramFor('gramana');
            expect(res).to.be.eql(['anagram']);
        });
      
    });
});
