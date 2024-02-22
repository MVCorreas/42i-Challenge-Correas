"use client"
import { useState } from 'react';
import { twoNumberSum } from '../Components/twoNumberSum';

export default function Home() {
  const [companyPayments, setCompanyPayments] = useState(Array(5).fill(0));
  const [totalSum, setTotalSum] = useState('');
  const [highlightedPayments, setHighlightedPayments] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  
  const handleCalculate = () => {
    const numbers = companyPayments;
    const targetSum = parseInt(totalSum);
  
    // Validate inputs
    if (isNaN(targetSum) || targetSum < 1 || targetSum > 20 || numbers.some(num => num < 0 || num > 10)) {
      setErrorMessage('Please enter valid numbers: 1) Total investment between 1 and 20, 2) Company payments between 0 and 10.');
      setSuccessMessage('');
      return;
    }
  
    // Call twoNumberSum function
    const pair = twoNumberSum(numbers, targetSum);
  
    if (pair.length === 2) {
      // Count occurrences of each number
      const occurrences = {};
      numbers.forEach(num => {
        occurrences[num] = occurrences[num] ? occurrences[num] + 1 : 1;
      });
  
      // Initialize an array to keep track of numbers that have been highlighted
      const highlightedNumbers = [];
  
      // Iterate through each number in the pair
      for (const num of pair) {
        // Find the index of the first occurrence of the number in the companyPayments array
        const index = numbers.indexOf(num);
  
        // Highlight the number if it hasn't been highlighted before
        if (!highlightedNumbers.includes(index)) {
          highlightedNumbers.push(index);
        }
  
        // If the number appears more than once and it's the second occurrence in the pair, highlight it again
        if (occurrences[num] >= 2) {
          const secondIndex = numbers.indexOf(num, index + 1);
          if (!highlightedNumbers.includes(secondIndex)) {
            highlightedNumbers.push(secondIndex);
          }
        }
      }
  
      // Set the highlightedPayments state with the indices of the highlighted numbers
      setHighlightedPayments(highlightedNumbers);
      setSuccessMessage(`The pair of payments highlighted above successfully sum up to the target amount for investment. If two amounts are repeated, you may choose the one that fit best according to your needs.`);
      setErrorMessage('');
    } else {
      setHighlightedPayments([]);
      setSuccessMessage('');
      setErrorMessage('No pair of payments found that sum up to the target amount.');
    }
  };
  
  // Update company payments array
  const handlePaymentChange = (index, value) => {
    const newPayments = [...companyPayments];
    newPayments[index] = parseInt(value);
    setCompanyPayments(newPayments);
  };

  // Calculate total account balance
  const totalBalance = companyPayments.reduce((acc, curr) => acc + curr, 0);

  return (
    <div>
      <h1>Investment Simulation</h1>
      <label htmlFor="accountBalance">Total Account Balance:</label>
      <input type="number" id="accountBalance" value={totalBalance} readOnly /><br /><br />

      <label htmlFor="companyPayments">Company Payments:</label><br />
        {[...Array(companyPayments.length)].map((_, index) => (
          <div className="company-container" key={index}>
            <h3>{`Company ${String.fromCharCode(65 + index)}`}</h3>
            <input
              type="number"
              placeholder="Payment"
              min="0"
              max="10"
              value={companyPayments[index]}
              onChange={(e) => handlePaymentChange(index, e.target.value)}
              className={highlightedPayments.includes(index) ? 'highlight' : ''}
            />
          </div>
        ))}

      <label htmlFor="investmentAmount">How much do you want to invest?</label>
      <input
        type="number"
        id="investmentAmount"
        min="1"
        max="20"
        value={totalSum}
        onChange={(e) => setTotalSum(e.target.value)}
        required
      /><br /><br />

      <button onClick={handleCalculate}>Calculate</button>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}

      <style jsx>{`
        .highlight {
          background-color: yellow;
        }
        .error-message {
          color: red;
        }
        .success-message {
          color: green;
        }
      `}</style>
    </div>
  );
}