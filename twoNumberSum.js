function twoNumberSum(numbers, targetSum) {
    const numMap = {}; 
    
    for (let i = 0; i < numbers.length; i++) {
        const complement = targetSum - numbers[i];
        if (numMap[complement] !== undefined) {
           
            return [complement, numbers[i]];
        }
       
        numMap[numbers[i]] = i;
    }
    
   
    return [];
}


const numbers1 = [2, 7, 11, 15];
const targetSum1 = 9;
console.log(twoNumberSum(numbers1, targetSum1)); // Output: [2, 7]

const numbers2 = [3, 6, 8, 10];
const targetSum2 = 15;
console.log(twoNumberSum(numbers2, targetSum2)); // Output: []
