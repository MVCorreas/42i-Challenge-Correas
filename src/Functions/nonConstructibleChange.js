function nonConstructibleChange(coins) {

    //We check whether the parameter 'coins' is an array
    if (!Array.isArray(coins)) {
        throw new TypeError('Input must be an array');
    }

    //We iterate though each number in the array.
    //For each value, we check if the current index is a number, and 
    //if the number is positive.
    for (let i = 0; i < coins.length; i++) {
        const coin = coins[i];
        if (!Number.isInteger(coin)) {
            throw new TypeError('All elements in the array must be integers'); //TypeError: used when the variable type is not the expected one.
        }
        if (coin <= 0) {
            throw new RangeError('All elements in the array must be positive integers');//RangeError: used when the value is a number and it exceeds the alloted range.
        }
    }

    //We employ the sort() method to organize the coins in ascending order. The default order is ascending. Sorting helps efficiently go through the array and find the min possible.
    coins.sort((a, b) => a - b); 

    //We initialize a minPossible variable in 1, representing the minimum amount of change that cannot be created.
    let minPossible = 1; 
    
     //We iterate though each coin in the sorted array.
    for (let i = 0; i < coins.length; i++) {

        //If the value of the current coin is greater than the value of the minPossible variable, we return the minPossible variable, since it is the minimum value that cannot be created.
        if (coins[i] > minPossible) {
            return minPossible; 
        }

        //If the value of the current coin is NOT greater than minPossible, it means that the current coin can create all amounts of change up to minPossible (inclusive). We add the value of the current coin to the minPossible variable, updating the minimum possible value.
        minPossible += coins[i]; 
    }
    
    //Once the loop is completed, we return the minPossible value. If no values were greater than minPossible throughout the iteration, the loop finishes returning minPossible as 1.
    return minPossible;
}

//We export the function to be used in other parts of the code.
module.exports = { nonConstructibleChange };
