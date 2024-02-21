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


const coins = [5, 7, 1, 1, 2, 3, 22];
console.log(nonConstructibleChange(coins)); 
