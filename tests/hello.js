define([
    'intern!bdd',
    'intern/chai!',
    'app/hello'
], function (bdd, chai, hello) {
    chai.should();

    bdd.describe('hello', function() {
        bdd.it('should return a greeting for the person named in the first argument', function() {
            return hello.greet('Murray').should.equal('Hello, Murray!');
        });

        bdd.it('should return a greeting to "world"', function() {
            return hello.greet().should.equal('Hello, world!');
        });
    });
});
