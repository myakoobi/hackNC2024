import React, { useState } from 'react';
import Login from './login';
import Tmv from "./TMV"
import { sendEmail } from './email';
import TotalInterestCalculator from "./interest"
import './App.css';

const App = () => {
  const [loanAmount, setLoanAmount] = useState('0');
  const [interestRate, setInterestRate] = useState('0');
  const [expenses, setExpenses] = useState('0');
  const [monthlyPayment, setMonthlyPayment] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({name: " ", email:""});

  const handleLogin = (name, email) => {
    setUser({name, email});
    setIsLogged(true);
  };

  const calculatePayments = () => {
    const loan = parseFloat(loanAmount);
    const rate = parseFloat(interestRate)/100/12 ; 
    if (!loan || !rate){
      setMonthlyPayment("Please enter valid numbers!");
      return; 
    }
    const monthly = loan * rate / (1 - Math.pow(1 + rate, -12)); 
    const result = `$${monthly.toFixed(2)} per month`;
    setMonthlyPayment(result);
    sendEmail(user.email, loanAmount, expenses, result);
  }
 

  return (
    <div className="App">
      {!isLogged ?( <Login onLogin={handleLogin} />
      ) : (
        <div>
          <h1 className='title'> Time Value Vault</h1> 
          <p className='body'> Enter some information so we can get it calculated!</p>
          <p className='body'> Enter your income: </p> <input type="number" id="income" name="income"></input>
          <p className='body'> Enter the loan amount owed: </p> <input type="number" id="loan" name="loan" onChange={(e) => setLoanAmount(e.target.value)}></input>
          <p className='body'> Enter your monthly expenses:</p> <input type="number" id="expenses" name="expenses" onChange={(e) => setExpenses(e.target.value)}></input>
          <button onClick={calculatePayments}>Calculate Payment</button>
          <h2 className='result' id="paymentResult">{"Result: " + monthlyPayment}</h2> {/* Display the result here */}
         <Tmv/>
        </div>
      )}
    </div>
  )
};
export default App;
