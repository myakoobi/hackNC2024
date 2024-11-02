import React, { useState } from 'react';

export default function Tvm() {
  // State for inputs
  const [interest, setInterest] = useState();
  const [pv, setPv] = useState();
  const [fv, setFv] = useState();
  const [time, setTime] = useState();
  const [ppy, setPpy] = useState(); 
  const [results, setResults] = useState({ futureValue: '', presentValue: '', payment: '' });

  // Future Value function
  const futureValue = (i, pv, n) => {
    return (pv * Math.pow(1 + i, n)).toFixed(2);
  };

  // Present Value function
  const presentValue = (i, fv, n) => {
    return (fv / Math.pow(1 + i, n)).toFixed(2);
  };

  // Payment calculation function
  const pmtCalc = (i, pv, n, ppy) => {
    return ((pv * (i / ppy)) / (1 - Math.pow(1 + i / ppy, -1 * ppy * n))).toFixed(2);
  };

  // Function to handle calculation and update results
  const calculate = () => {
    const fvResult = futureValue(interest, pv, time);
    const pvResult = presentValue(interest, fv, time);
    const paymentResult = pmtCalc(interest, pv, time, ppy);
    setResults({ futureValue: fvResult, presentValue: pvResult, payment: paymentResult });
  };

//   const value = () => {
//     valueSeen = futureValue - presentValue 
//   }

  return (
    <div style={{ padding: '20px', color: "white" }}>
      <h1>TVM Calculator</h1>
      <label>
        Interest Rate (as decimal):
        <input
          type="number"
          value={interest}
          onChange={(e) => setInterest(parseFloat(e.target.value))}
        />
      </label>
      <br />
      <label>
        Present Value (PV):
        <input
          type="number"
          value={pv}
          onChange={(e) => setPv(parseFloat(e.target.value))}
        />
      </label>
      <br />
      <label>
        Future Value (FV):
        <input
          type="number"
          value={fv}
          onChange={(e) => setFv(parseFloat(e.target.value))}
        />
      </label>
      <br />
      <label>
        Time (Years):
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(parseInt(e.target.value))}
        />
      </label>
      <br />
      <label>
        Payments per Year (PPY):
        <input
          type="number"
          value={ppy}
          onChange={(e) => setPpy(parseInt(e.target.value))}
        />
      </label>
      <br />
      <button onClick={calculate}>Calculate</button>

      <h2>Results</h2>
      <p>Future Value: {results.futureValue}</p>
      <p>Present Value: {results.presentValue}</p>
      <p>Payment Amount: {results.payment}</p>
      {/* <p>Total interest: {futureValue-presentValue} </p> */}
    </div>
  );
}

