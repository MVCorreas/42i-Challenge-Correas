function nonConstructibleChange(coins) {
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
