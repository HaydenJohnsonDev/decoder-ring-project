// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  function caesar(input, shift, encode = true) {
    if (!shift || shift == 0 || shift < -25 || shift > 25) return false;
    
    if (encode == true) return encoder(input, shift);
    return decoder(input, shift);
  }

  //Encoder function:
  function encoder (input, shift) {
    let result = []

    const reference = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
    let code = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];

    //Check for a NEGATIVE direction shift and shift the key
    if (shift < 0) {
      for (let i = 0; i > shift; i--) {
        let letter = code.pop();
        code.unshift(letter);
      }
    }
    //Check for a POSITIVE direction shift and shift the key
    if (shift > 0) {
      for (let i = 0; i < shift; i++) {
        let letter = code.shift();
        code.push(letter);
      }
    }

    //Sort the result based on the given paramaters
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
  //Decoder function:
  function decoder (input, shift) {
    let result = []

    const reference = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
    let code = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];

    //Check for a NEGATIVE direction shift and shift the key
    if (shift < 0) {
      for (let i = 0; i > shift; i--) {
        let letter = code.pop();
        code.unshift(letter);
      }
    }
    //Check for a POSITIVE direction shift and shift the key
    if (shift > 0) {
      for (let i = 0; i < shift; i++) {
        let letter = code.shift();
        code.push(letter);
      }
    }

    //Sort the result based on the given paramaters
    for (let i = 0; i < input.length; i++) {
      let character = input[i].toLowerCase();
      if (!reference.includes(character)) { 
        result.push(character);
      } else {
        let characterNum = code.indexOf(character);
        let uncodedCharacter = reference[characterNum];
        result.push(uncodedCharacter);
      }
    }
    return result.join('');
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
