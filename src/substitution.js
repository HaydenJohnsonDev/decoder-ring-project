// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphebet, encode = true) {
    // your solution code here

    if (encode) return encoder(input, alphebet);
    return decoder(input, alphebet);
    
  }

  function encoder (input, alphebet) {
    if (!alphebet) return false;
    const code = alphebet.split('');
    if (code.length != 26) return false;

    for (let i = 0; i < code.length; i++) {
      let check = code[i];

      let counter = code.filter((char) => check == char);
      if (counter.length > 1) return false
    }

    const reference = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
    let result = [];

    for (let i = 0; i < input.length; i++) {
      let character = input[i].toLowerCase();
      if (!reference.includes(character)) { 
        result.push(character);
      } else {
        let characterNum = reference.indexOf(character);
        let codedCharacter = code[characterNum];
        result.push(codedCharacter);
      }
    }
    return result.join('');
  }

  function decoder (input, alphebet) {
    if (!alphebet) return false;
    const code = alphebet.split('');
    if (code.length != 26) return false;

    for (let i = 0; i < code.length; i++) {
      let check = code[i];

      let counter = code.filter((char) => check == char);
      if (counter.length > 1) return false
    }

    const reference = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
    let result = [];

    for (let i = 0; i < input.length; i++) {
      let character = input[i].toLowerCase();
      if (!code.includes(character)) { 
        result.push(character);
      } else {
        let characterNum = code.indexOf(character);
        let unCodedCharacter = reference[characterNum];
        result.push(unCodedCharacter);
      }
    }
    return result.join('');
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
