// initialising codewar 
// question:  
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

const solution = (str, ending) => {
      return  str.indexOf(ending, str.length + ending.length ) !== -1;
}

const displayResults = solution('adc', 'bbc');
 console.log(displayResults);

 // link for donation to the 11 years old developer

    // bit.ly/gdgaba
    let stringOne = 'abc';
    let stringTwo = 'abc';
    let generatedResult = stringOne.indexOf(stringTwo, stringOne.length + stringTwo.length) !== -1;
    console.log(generatedResult);

    // solution2
    const solution2 = (startString, endString) => {
      return startString.endsWith(endString);
    }

    console.log(solution2('xxs', 'bbc'));

    // solution3 for codewar algorithm
    const solution3 = (startString, endString) => {
      // return startString.endsWith(endString);
      return startString.substr(-endString.length) === -endString
    }

    console.log(solution3('xxs', 'bbc'));

    console.log(solution)