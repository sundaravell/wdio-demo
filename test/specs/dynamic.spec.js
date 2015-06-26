describe('dynamic loading', function() {

    it('should be an button on the page', function*() {
        yield browser.url('/dynamic_loading/1');
        yield browser.isExisting('button=Start').then(function(isExisting) {
            expect(isExisting).toBe(true);
        });
    });

    it('should load content after clicking on button', function*() {
        yield browser.url('/dynamic_loading/2');
        yield browser.isExisting('#finish').then(function(isExisting) {
            expect(isExisting).toBe(false);
        });
        yield browser.click('button=Start');
        yield browser.waitForExist('#finish', 10000);
        yield browser.isExisting('#finish').then(function(isExisting) {
            expect(isExisting).toBe(true);
        });
    });

});
