// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution() tests written by Hayden Johnson", () => {
    describe("error handling", () => {
        it("should return 'false' if the alphebet passed in is not exactly 26 characters long", () => {
            const input = 'this is the message';
            const alphebet = 'qwertyuiopasdfghjklzxcvb';
            const actual = substitution(input, alphebet);
            expect(actual).to.be.false;
        })
        it("should return 'false' if the alphebet passed in has a repeat character", () => {
            const input = 'this is the message';
            const alphebet = 'qwqwqwqwqwqwqwqwqwqwqwqwqw';
            const actual = substitution(input, alphebet);
            expect(actual).to.be.false;
        })
        it("should return 'false' if user attempts to decode with an alphebet without 26 unique characters", () => {
            const input = 'dtllqut';
            const alphebet = 'qwertyuiopasdfghjklzxcvbn'
            const actual = substitution(input, alphebet, false);
            expect(actual).to.be.false;
        })
    })
    describe("encoding message", () => {
        it("should encode a message with the given alphebet and input message", () => {
            const input = 'message';
            const alphebet = 'qwertyuiopasdfghjklzxcvbnm'
            const actual = substitution(input, alphebet);
            const expected = 'dtllqut'
            expect(actual).to.equal(expected);
        })
        it("should encode a message with the given alphebet and input message maintaing spaces", () => {
            const input = 'mes sage';
            const alphebet = 'qwertyuiopasdfghjklzxcvbnm'
            const actual = substitution(input, alphebet);
            const expected = 'dtl lqut'
            expect(actual).to.equal(expected);
        })
        it("should encode a message with the given alphebet and input message maintaing spaces and special characters", () => {
            const input = 'mes ! sage';
            const alphebet = 'qwertyuiopasdfghjklzxcvbnm'
            const actual = substitution(input, alphebet);
            const expected = 'dtl ! lqut'
            expect(actual).to.equal(expected);
        })
        it("when given an alphebet with special characters, it should still encode a message using those characters.", () => {
            const input = 'mes ! sage';
            const alphebet = '#wertyuiopasdfghjk1zxcvbnm'
            const actual = substitution(input, alphebet);
            const expected = 'dt1 ! 1#ut'
            expect(actual).to.equal(expected);
        })
    })
    describe("decoding message", () => {
        it("should decode a message with the given alphebet and input message", () => {
            const input = 'dtllqut';
            const alphebet = 'qwertyuiopasdfghjklzxcvbnm'
            const actual = substitution(input, alphebet, false);
            const expected = 'message'
            expect(actual).to.equal(expected);
        })
        it("should decode a message with the given alphebet and input message maintaing spaces", () => {
            const input = 'dtl lqut'
            const alphebet = 'qwertyuiopasdfghjklzxcvbnm'
            const actual = substitution(input, alphebet, false);
            const expected = 'mes sage'
            expect(actual).to.equal(expected);
        })
        it("should decode a message with the given alphebet and input message maintaing spaces and special characters", () => {
            const input = 'dtl ! lqut'
            const alphebet = 'qwertyuiopasdfghjklzxcvbnm'
            const actual = substitution(input, alphebet, false);
            const expected = 'mes ! sage'
            expect(actual).to.equal(expected);
        })
        it("when given an alphebet with special characters, it should still encode a message using those characters.", () => {
            const input = 'dt1 ! 1#ut'
            const alphebet = '#wertyuiopasdfghjk1zxcvbnm'
            const actual = substitution(input, alphebet, false);
            const expected = 'mes ! sage'
            expect(actual).to.equal(expected);
        })
    })
})
