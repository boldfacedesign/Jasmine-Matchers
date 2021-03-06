'use strict';

describe('toBeWholeNumber', function() {
    describe('when invoked', function() {
        describe('when subject IS a number with no positive decimal places', function() {
            it('should confirm', function() {
                expect(1).toBeWholeNumber();
                expect(0).toBeWholeNumber();
                expect(0.0).toBeWholeNumber();
            });
        });
        describe('when subject is NOT a number with no positive decimal places', function() {
            it('should deny', function() {
                expect(NaN).not.toBeWholeNumber();
                expect(1.1).not.toBeWholeNumber();
                expect(0.1).not.toBeWholeNumber();
            });
        });
    });
});
