const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius() tests by written Hayden Johnson", () => {
    describe('error handling', () => {
        it("should return the input if user accidentally enters numbers on the 'encode' setting", () => {
            const message = '4432423352125413';
            const actual = polybius(message);
            const expected = '4432423352125413';
            expect(actual).to.equal(expected);
        })
        it("should return 'false' if decoder is called with an uneven length message exculing spaces or symbols", () => {
            const message = '443';
            const actual = polybius(message, false);
            expect(actual).to.be.false;
        })
    })
    describe('encoding a message', () => {
        it("should return a coded message", () => {
            const message = 'thinkful';
            const actual = polybius(message);
            const expected = '4432423352125413';
            expect(actual).to.equal(expected);
        });
        it("should ignore capital letters", () => {
            const message = 'Thinkful';
            const actual = polybius(message);
            const expected = '4432423352125413';
            expect(actual).to.equal(expected);
        });
        it("should maintain spaces and extra characters", () => {
            const message = 'Th  i ! nkful';
            const actual = polybius(message);
            const expected = '4432  42 ! 3352125413';
            expect(actual).to.equal(expected);
        });
    })
    describe('decoding a message', () => {
        it("should return '(i/j)' if code '42' is passed in", () => {
            const message = '42';
            const actual = polybius(message, false);
            const expected = '(i/j)';
            expect(actual).to.equal(expected);
        });
        it("should return a decoded message", () => {
            const message = '4432423352125413!';
            const actual = polybius(message, false);
            const expected = 'th(i/j)nkful!';
            expect(actual).to.equal(expected);
        });
        it("should maintain spaces and extra characters", () => {
            const message = '!4432  42  3352125413!';
            const actual = polybius(message, false);
            const expected = '!th  (i/j)  nkful!';
            expect(actual).to.equal(expected);
        });
    })
})
