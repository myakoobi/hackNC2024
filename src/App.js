// import React, { useState } from 'react';
// import Login from './login';
// import Tmv from "./TMV"
// import { sendEmail } from './email';
// import TotalInterestCalculator from "./interest"
// import './App.css';

// const App = () => {
//   const [loanAmount, setLoanAmount] = useState('0');
//   const [interestRate, setInterestRate] = useState('0');
//   const [expenses, setExpenses] = useState('0');
//   const [monthlyPayment, setMonthlyPayment] = useState('');
//   const [isLogged, setIsLogged] = useState(false);
//   const [user, setUser] = useState({name: " ", email:""});

//   const handleLogin = (name, email) => {
//     setUser({name, email});
//     setIsLogged(true);
//   };

//   const calculatePayments = () => {
//     const loan = parseFloat(loanAmount);
//     const rate = parseFloat(interestRate)/100/12 ; 
//     const months = 12;
    
//     if (isNaN(loan)|| loan <= 0 || isNaN(rate) || rate <=0){
//       setMonthlyPayment("Please enter valid numbers!");
//       return; 
//     }
//     const monthly = loan * rate / (1 - Math.pow(1 + rate, -months)); 
//     const result = `$${monthly.toFixed(2)} per month`;
//     setMonthlyPayment(result);
//     sendEmail(user.email, loanAmount, expenses, result);
//   }
 

//   return (
//     <div className="App">
//       {!isLogged ?( <Login onLogin={handleLogin} />
//       ) : (
//         <div>
//           <h1 className='title'> Time Value Vault</h1> 
//           <p className='body'> Enter some information so we can get it calculated! </p>
//           <p className='body'> Enter your income: </p> <input type="number" id="income" name="income"/>
//           <p className='body'> Enter the loan amount owed: </p> <input type="number" id="loan" name="loan" onChange={(e) => setLoanAmount(e.target.value)}/>
//           <p className='body'> Enter the interest rate: </p> <input type="number" id="interest" name="interest" onChange={(e) => setInterestRate(e.target.value)}/>
//           <p className='body'> Enter your monthly expenses:</p> <input type="number" id="expenses" name="expenses" onChange={(e) => setExpenses(e.target.value)}/>
//           <button onClick={calculatePayments}>Calculate Payment</button>
//           <h2 className='result' id="paymentResult">{"Result: " + monthlyPayment}</h2> {/* Display the result here */}
//          <Tmv/>
//         </div>
//       )}
//     </div>
//   )
// };
// export default App;

// App.js
import React, { useState } from 'react';
import './App.css';
import Login from './login';
import Calculator from './calculator';
import Tmv from './TMV';
import FinanceChat from './gemini';


const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({ name: "", email: "" });

  const handleLogin = (name, email) => {
    setUser({ name, email });
    setIsLogged(true);
  };

  return (
    <div className="App">
      <h1 className="title">Time Value Vault</h1>
      {!isLogged ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div>
          <p>Welcome, {user.name}</p>
          <div className='components'> 
          {/* <Calculator /> */}
          <Tmv />
          <div>
      <h1>Finance Assistant</h1>
      <FinanceChat />
    </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
