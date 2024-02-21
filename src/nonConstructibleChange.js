function nonConstructibleChange(coins) {
    if (!Array.isArray(coins)) {
        throw new TypeError('Input must be an array');
    }

    for (const coin of coins) {
        if (!Number.isInteger(coin)) {
            throw new TypeError('All elements in the array must be integers');
        }
        if (coin <= 0) {
            throw new RangeError('All elements in the array must be positive integers');
        }
    }

    coins.sort((a, b) => a - b); 
    let minPossible = 1; 
    
    for (let i = 0; i < coins.length; i++) {
        if (coins[i] > minPossible) {
            return minPossible; 
        }
        minPossible += coins[i]; 
    }
    
    return minPossible;
}

module.exports = { nonConstructibleChange };
