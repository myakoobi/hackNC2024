import React, { useState } from 'react';

export default function TotalInterestCalculator() {
    const [interestRate, setInterestRate] = useState(0);
    const [presentValue, setPresentValue] = useState(0);
    const [numberOfPeriods, setNumberOfPeriods] = useState(0);
    const [totalInterest, setTotalInterest] = useState(null);

    const calculateTotalInterest = () => {
        const i = interestRate / 100; // Convert percentage to decimal
        const fv = presentValue * Math.pow((1 + i), numberOfPeriods);
        setTotalInterest(fv - presentValue);
    };

    return (
        <div>
            <h1>Total Interest Calculator</h1>
            <div>
                <label>
                    Interest Rate (%):
                    <input 
                        type="number" 
                        value={interestRate} 
                        onChange={(e) => setInterestRate(e.target.value)} 
                    />
                </label>
            </div>
            <div>
                <label>
                    Present Value ($):
                    <input 
                        type="number" 
                        value={presentValue} 
                        onChange={(e) => setPresentValue(e.target.value)} 
                    />
                </label>
            </div>
            <div>
                <label>
                    Number of Periods:
                    <input 
                        type="number" 
                        value={numberOfPeriods} 
                        onChange={(e) => setNumberOfPeriods(e.target.value)} 
                    />
                </label>
            </div>
            <button onClick={calculateTotalInterest}>Calculate Total Interest</button>
            {totalInterest !== null && (
                <h2>Total Interest Paid: ${totalInterest.toFixed(2)}</h2>
            )}
        </div>
    );
}

