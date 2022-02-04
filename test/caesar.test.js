const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar() tests by written Hayden Johnson", () => {
    describe("error handling", () => {
        it("Should return 'false' if function is called without a shift parameter given.", () => {
            const actual = caesar();
            expect(actual).to.be.false;
        });
        it("Should return 'false' if function is called with a shift parameter smaller then -25.", () => {
            const actual = caesar("haha", -26);
            expect(actual).to.be.false;
        });
        it("Should return 'false' if function is called with a shift parameter greater then 25.", () => {
            const actual = caesar("haha", 26);
            expect(actual).to.be.false;
        });
        it("Should return 'false' if function is called with a shift parameter of 0.", () => {
            const actual = caesar("haha", 0);
            expect(actual).to.be.false;
        });
    })
    /* >NEGATIVE CODE SHIFT PASSED<
    it("Should shift the code array to the left according to the negative shift value given.", () => {
        const actual = caesar("haha", -3);
        const expected = [ 'd', 'e', 'f', 'a', 'b', 'c' ];
        expect(actual).to.eql(expected);
    });
    */
    /* >POSITIVE CODE SHIFT PASSED<
    it("Should shift the code array to the right according to the positive shift value given.", () => {
        const actual = caesar("haha", 3);
        const expected = [ 'd', 'e', 'f', 'a', 'b', 'c' ];
        expect(actual).to.eql(expected);
    });
    */
    describe("encoding a message", () => {
        it("Should return a coded message", () => {
            const actual = caesar("thisisasecretmessage", 3);
            const expected = "wklvlvdvhfuhwphvvdjh";
            expect(actual).to.equal(expected);
        });
        it("Should ignore capitals", () => {
            const actual = caesar("Thisisasecretmessage", 3);
            const expected = "wklvlvdvhfuhwphvvdjh";
            expect(actual).to.equal(expected);
        });
        it("Should ignore spaces", () => {
            const actual = caesar("this is a secret message", 3);
            const expected = "wklv lv d vhfuhw phvvdjh";
            expect(actual).to.equal(expected);
        });
    })
    describe("decoding a message", () => {
        it("Should return a decoded message", () => {
            const actual = caesar("wklvlvdvhfuhwphvvdjh", 3, false);
            const expected = "thisisasecretmessage";
            expect(actual).to.equal(expected);
        });
        it("Should ignore capitals", () => {
            const actual = caesar("WklvlvDvhfuhwphvvdjh", 3, false);
            const expected = "thisisasecretmessage";
            expect(actual).to.equal(expected);
        });
        it("Should ignore spaces", () => {
            const actual = caesar("wklv lv d vhfuhw phvvdjh", 3, false);
            const expected = "this is a secret message";
            expect(actual).to.equal(expected);
        });
    });
});
