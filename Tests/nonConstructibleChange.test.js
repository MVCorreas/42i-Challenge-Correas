const nonConstructibleChange = require('../src/nonConstructibleChange').default; // Import your function

// Define individual test cases
const testCases = [
  { coins: [5, 7, 1, 1, 2, 3, 22], targetSum: 9, expected: 20 },
  { coins: [], targetSum: 0, expected: 1 },
  { coins: [1, 2, 3, 4, 5], targetSum: 15, expected: 16 }
];

// Run tests
testCases.forEach((testCase, index) => {
  const { coins, targetSum, expected } = testCase;
  const actual = nonConstructibleChange(coins, targetSum);
  const result = actual === expected ? 'Passed' : 'Failed';
  console.log(`Test ${index + 1}: ${result}`);
  console.log(`  Input: coins = ${coins}, targetSum = ${targetSum}`);
  console.log(`  Expected: ${expected}`);
  console.log(`  Actual: ${actual}`);
  console.log();
});
