// function twoNumberSum(numbers, targetSum) {
//     const numMap = {}; 
    
//     for (let i = 0; i < numbers.length; i++) {
//         const complement = targetSum - numbers[i];
//         if (numMap[complement] !== undefined) {
           
//             return [complement, numbers[i]];
//         }
       
//         numMap[numbers[i]] = i;
//     }
    
   
//     return [];
// }

// module.exports = { twoNumberSum }

function twoNumberSum(numbers, targetSum) {
    const numMap = {}; 
    
    for (let i = 0; i < numbers.length; i++) {
        const complement = targetSum - numbers[i];
        if (numMap[complement] !== undefined && numMap[complement] !== i) {
            return [complement, numbers[i]];
        }
        numMap[numbers[i]] = i;
    }
    
    return [];
}

module.exports = { twoNumberSum };

