                                                            42i CHALLENGE

Read the following two problems and create a suitable function. For each function, create suitable testing units.
The alloted time is 72 h.
You will need to hand in the link to the Github repository.

CHALLENGE TEST 1

# TWO NUMBER SUM

Given an array of integers, no number in this array is repeated, and an integer representing the target sum, implement a function that find whether there's a pair of numbers in the array that adds up to the target sum. Return the pair in an array. If such pair does not exist, return an empty array.
Examples:

### **Sample Input**

`const numbers = [2, 7, 11, 15];`
`const targetSum = 9;`

### **Sample Output**

`findPairWithSum(numbers, targetSum); // Input: [2, 7]`
​

### **Sample Input**

`const numbers = [3, 6, 8, 10];`
`const targetSum = 15;`

### **Sample Output**

`findPairWithSum(numbers, targetSum); // Output: []`

CHALLENGE TEST 2

# NON-CONSTRUCTIBLE CHANGE

Given an array of positive integers representing the values of coins in your possession, write a function that returns the minimum amount of change (the minimum sum of money) that you **cannot** create. The given coins can have any positive integer value and aren’t necessarily unique (i.e., you can have multiple coins of the same value).

For example, if you’re given coins = `[1, 2, 5]`, the minimum amount of change that you can’t create is `4`. If you’re given no coins, the minimum amount of change that you can’t create is 1.

### **Sample Input**

`coins = [5, 7, 1, 1, 2, 3, 22]`

### **Sample Output**

`20`
