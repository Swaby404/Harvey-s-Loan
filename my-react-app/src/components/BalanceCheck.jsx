import React, { useState } from 'react';

const BalanceCheck = ({ checkBalance }) => {
    const [name, setName] = useState('');
    const [balance, setBalance] = useState(null);

    const handleCheckBalance = () => {
        const customerBalance = checkBalance(name);
        setBalance(customerBalance);
    };

    return (
        <div>
            <h3>Check Loan Balance</h3>
            <input
                type="text"
                placeholder="Customer Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleCheckBalance}>Check Balance</button>
            {balance !== null && <p>Remaining Balance: ${balance}</p>}
        </div>
    );
};

export default BalanceCheck;
