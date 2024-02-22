"use client"
import { useState, useEffect } from 'react';
import { twoNumberSum } from '../Components/twoNumberSum';
import Image from 'next/image';


export default function Home() {
  const [companyPayments, setCompanyPayments] = useState(Array(5).fill(0));
  const [totalSum, setTotalSum] = useState('');
  const [highlightedPayments, setHighlightedPayments] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: '',
    message: ''
  });

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

// Function to open the modal
const openModal = () => {
  setModalVisible(true);
};

// Function to close the modal
const closeModal = () => {
  setModalVisible(false);
};

// Use useEffect to show the modal when there's an error or success message
useEffect(() => {
  if (errorMessage || successMessage) {
    openModal();
    setModalContent({
      title: errorMessage ? 'Error' : 'Success',
      message: errorMessage || successMessage
    });
  }
}, [errorMessage, successMessage]);


  return (
    <div>
     <div className="investment-title">
        <h1>Investment Simulation</h1>
      </div>

      <div className='balance-container'>
      <div className="border border-gray-200 rounded-lg overflow-hidden">
      <h2 className="balance-title">Total Account Balance:</h2>
      <div className="px-4 py-2">
        <span className="text-2.5xl font-bold">$</span>
        <span className="account-balance">{totalBalance}.00</span>
      </div>
    </div>
      </div>
     



      <div className="table-container">
        <h2 className='table-title' htmlFor="companyPayments">Company Payments:</h2>
 
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Company name</th>
              <th>Amount Received</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(companyPayments.length)].map((_, index) => (
              <tr key={index}>
                <td>02/22/2024</td>
                <td>{`Company ${String.fromCharCode(65 + index)}`}</td>
                <td>
                  <input
                    type="number"
                    placeholder="Payment"
                    min="0"
                    max="10"
                    value={companyPayments[index]}
                    onChange={(e) => handlePaymentChange(index, e.target.value)}
                    className={highlightedPayments.includes(index) ? 'highlight' : ''}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="question-container">
        <label htmlFor="investmentAmount">How much do you want to invest?</label>
      </div>

      <input
        type="number"
        id="investmentAmount"
        min="1"
        max="20"
        value={totalSum}
        onChange={(e) => setTotalSum(e.target.value)}
        required
      />

<button className="calculate-button" onClick={() => { handleCalculate(); document.getElementById('my_modal_1').showModal() }}>Calculate</button>

<div className="right-column">
        <Image src="/investment.png" alt="Image" width={300} height={300} />
</div>

<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">What to invest?</h3>
    <p className="py-4">
      {errorMessage && errorMessage}
      {successMessage && successMessage}
    </p>
    <div className="modal-action">
      <form method="dialog">
        <button className="btn" onClick={closeModal}>Close</button>
      </form>
    </div>
  </div>
</dialog>
</div>
   
  );
}