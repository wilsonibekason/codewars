// initialising codewar 
// question:  
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

const solution = (str, ending) => {
         str.indexOf(ending, str.length + ending.length ) !== -1;
}

const displayResults = solution('adc', 'bbc');
 console.log(displayResults);

 // link for donation to the 11 years old developer

    // bit.ly/gdgaba
    let stringOne = 'abc';
    let stringTwo = 'abc';
    let generatedResult = stringOne.indexOf(stringTwo, stringOne.length + stringTwo.length) !== -1;
    console.log(generatedResult);