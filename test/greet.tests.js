describe('Test greet function...' , function(){
    it("... it should return 'Hello, Koketso' when called with 'Koketso'" , function(){
        assert.equal('Hello, Koketso', greet('Koketso'));
    });

    it("... it should return 'Hello, Foza' when called with 'Foza'" , function(){
        assert.equal('Hello, Foza', greet('Foza'));
    });
});