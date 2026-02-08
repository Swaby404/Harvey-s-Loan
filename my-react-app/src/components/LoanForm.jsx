import React, { useState } from 'react';
 
const LoanForm = ({ applyLoan, existingCustomer }) => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [interest, setInterest] = useState('');

    const handleApply = () => {
        if (name && amount > 0 && interest >= 0) {
            applyLoan(name, parseFloat(amount), parseFloat(interest));
        } else {
            alert('Please fill all fields correctly');
        }
    };

    return (
        <div>
            <h3>{existingCustomer ? 'Re-Application Form' : 'Loan Application Form'}</h3>
            <input
                type="text"
                placeholder="Customer Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Loan Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <input
                type="number"
                placeholder="Interest %"
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
            />
            <button onClick={handleApply}>Submit Application</button>
            
        </div>
        
    );
};

export default LoanForm;
