describe('auth form', function() {

    it('should deny access with wrong creds', function*() {
        yield browser.url('/login');
        yield browser.setValue('#username', 'foo');
        yield browser.setValue('#password', 'bar');
        yield browser.submitForm('#login');
        yield browser.getText('#flash').then(function(flashMsg) {
            expect(flashMsg).toContain('Your username is invalid!');
        });
    });

    it('should allow access with correct creds', function*() {
        yield browser.url('/login');
        yield browser.setValue('#username', 'tomsmith');
        yield browser.setValue('#password', 'SuperSecretPassword!');
        yield browser.submitForm('#login');
        yield browser.getText('#flash').then(function(flashMsg) {
            expect(flashMsg).toContain('You logged into a secure area!');
        });
    });

});
