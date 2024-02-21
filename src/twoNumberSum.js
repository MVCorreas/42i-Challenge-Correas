function twoNumberSum(numbers, targetSum) {

    //We check whether the parameter 'numbers' is an array
    if (!Array.isArray(numbers)) {
        throw new TypeError('Input must be an array');
    }
    
    //If the input is valid, we initialize an empty object to store the numbers from the array 'numbers'
    const numMap = {}; 
    
    //We iterate though each number in the array, and calculates the complement, i.e. the difference between the targetSum and the current number.
    for (let i = 0; i < numbers.length; i++) {
        const complement = targetSum - numbers[i];

        //We check if the complement exists in the numMap object, if it is different to the current number, and if it a positive number. 
        //If all the conditions are met, we have found the two numbers that pair up the targetSum,
        //So we return an array with the complement and the current number.
        if (numMap[complement] !== undefined && numMap[complement] !== i && complement >= 0) {
            return [complement, numbers[i]];
        }

        //if we cannot find a pair, we add the index of the current number to the numMap object.
        numMap[numbers[i]] = i;
    }
    
    //We return an empty array if the loop completes without finding a valid pair of numbers.
    return [];
}

//We export the function to be used in other parts of the code.
module.exports = { twoNumberSum };
