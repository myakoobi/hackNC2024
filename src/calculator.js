// Calculator.js
import React, { useState } from 'react';

const Calculator = ({onCalculate}) => {
  const [income, setIncome] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState('');
  const [expenses, setExpenses] = useState('');
  

  const calculatePayments = () => {
    const loan = parseFloat(loanAmount);
    const rate = parseFloat(interestRate)/100/12;
    const months = 12;

    if (isNaN(loan) || loan <= 0 || isNaN(rate) || rate <= 0) {
        onCalculate(loanAmount, expenses, "Please enter valid numbers!");
        return;
    }
    const monthly = loan * rate / (1 - Math.pow(1 + rate, -12));
    const result = `&&{monthly.toFixed(2)} per month`;
    setMonthlyPayment(result);
    // sendEmail(user.email, loanAmount, expenses, result);
  };

  return (
    <div className="calculator">
      <h2 className="subtitle">Loan Calculator</h2>
      <p className="body">Enter your income:</p>
      <p className='body'> Enter some information so we can get it calculated! </p>
          <p className='body'> Enter your income: </p> <input type="number" id="income" name="income"/>
          <p className='body'> Enter the loan amount owed: </p> <input type="number" id="loan" name="loan" onChange={(e) => setLoanAmount(e.target.value)}/>
          <p className='body'> Enter the interest rate: </p> <input type="number" id="interest" name="interest" onChange={(e) => setInterestRate(e.target.value)}/>
          <p className='body'> Enter your monthly expenses:</p> <input type="number" id="expenses" name="expenses" onChange={(e) => setExpenses(e.target.value)}/>
          <button onClick={calculatePayments}>Calculate Payment</button>
          <h2 className='result' id="paymentResult">{"Result: " + monthlyPayment}</h2> {/* Display the result here */}
      {/* <input
        type="number"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
        className="input"
        id = "income"
      />
      <p className="body">Enter the loan amount owed:</p>
      <input
        type="number"
        value={loanAmount}
        onChange={(e) => setLoanAmount(e.target.value)}
        className="input"
        id = "loan"
      />
       <p className="body">Enter the interest rate:</p>
      <input
        type="number"
        value={interestRate}
        onChange={(e) => setInterestRate(e.target.value)}
        className="input"
        id="interest"
      />
      <p className="body">Enter your monthly expenses (interest rate):</p>
      <input
        type="number"
        value={expenses}
        onChange={(e) => setExpenses(e.target.value)}
        className="input"
        id = "expense"
      />
      <button onClick={calculatePayments} className="button">
        Calculate Payment
      </button>
      <h2 className='result' id="paymentResult">{"Result: " + monthlyPayment}</h2>
      <h2 className="result">Result: {monthlyPayment}</h2> */}
    </div>
  );
};

export default Calculator;
