function twoNumberSum(numbers, targetSum) {

    //We check whether the parameter 'numbers' is an array
    if (!Array.isArray(numbers)) {
        throw new TypeError('Input must be an array');
    }

    //!Added this validation
    //We iterate though each number in the array.
    //For each value, we check if the current index is a number
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if (!Number.isInteger(number)) { //Static method that checks whether the passed value is a no
            throw new TypeError('All elements in the array must be integers'); //TypeError: used when the variable type is not the expected one.
        }
    }
    
    //If the input is valid, we initialize an empty object to store the numbers from the array 'numbers'
    //We choose an object vs an Array for the objetcs have constant-time complexity, whereas the arrays have linear-time complexity, i.e. accessing an index of an array implies iterating  vs hash tables to store object properties 
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

        //if we cannot find a pair, we add the index of the current number to the numMap object. If we iterate through the first number in the array, we wont find a pair or complement, so we move to the second number in the array, and store this first number in the numMap object
        numMap[numbers[i]] = i;
    }
    
    //We return an empty array if the loop completes without finding a valid pair of numbers.
    return [];
}

//We export the function to be used in other parts of the code.
module.exports = { twoNumberSum };
