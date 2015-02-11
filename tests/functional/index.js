define([
	'intern!bdd',
	'intern/chai!',
	'intern/dojo/node!chai-as-promised',
	'require'
], function(bdd, chai, chaiAsPromised, require) {
	chai.use(chaiAsPromised);
	chai.should();

	bdd.describe('Greeting', function() {
		var browser;

		bdd.before(function(){
			browser = this.remote;
		});

		bdd.beforeEach(function() {
			return browser.get(require.toUrl('index.html'));
		});

		bdd.after(function(){
			return browser.quit();
		});

		bdd.it('should be displayed when the form is submitted', function() {
			return browser
				.setFindTimeout(5000)
				.findByCssSelector('body.loaded')
				.findById('nameField')
				.click()
				.type('Elaine')
				.end()
				.findByCssSelector('#loginForm input[type=submit]')
				.click()
				.end()
				.findById('greeting')
				.getVisibleText()
				.should.become('Hello, Elaine!');
		});
	});
});