// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    if (encode == true) return encoder(input);
    return decoder(input);
  }

  function decoder(input) {

    //first removes spaces and symbols
    let test = [];

    const reference = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', '(i/j)', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
    const code = [ '11', '21', '31', '41', '51', '12', '22', '32', '42', '52', '13', '23', '33', '43', '53', '14', '24', '34', '44','54', '15', '25', '35', '45', '55' ];

    for (let i = 0; i < input.length; i += 2) {
      let character = input[i] + input[i + 1];
      if (code.includes(character)) { 
        test.push(character);
      } else {
        let num = input[i]
        let check = parseInt(num, 10);
        if (check) {
          test.push(check);
          i -= 1;
        } else { i -= 1; }
      }
    }
    //check if string without spaces and symbols is an even number
    const testString = test.join('');
    if (testString.length % 2 != 0) return false;

    let result = [];

    //decode the numbers
    for (let i = 0; i < input.length; i += 2) {
      let character = input[i] + input[i + 1];
      if (!code.includes(character)) { 
        result.push(input[i]);
        i -= 1;
      } else {
        let characterNum = code.indexOf(character);
        let codedCharacter = reference[characterNum];
        result.push(codedCharacter);
      }
    }
    return result.join('');
  }

  function encoder(input) {
    let result = []
    
    const reference = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
    const code = [ '11', '21', '31', '41', '51', '12', '22', '32', '42', '42', '52', '13', '23', '33', '43', '53', '14', '24', '34', '44','54', '15', '25', '35', '45', '55' ];

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

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
