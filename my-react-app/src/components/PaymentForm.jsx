import React, { useState } from 'react';

const PaymentForm = ({ makePayment }) => {
    const [name, setName] = useState('');
    const [paymentAmount, setPaymentAmount] = useState('');

    const handlePayment = () => {
        if (name && paymentAmount > 0) {
            makePayment(name, parseFloat(paymentAmount));
        } else {
            alert('Please fill all fields correctly');
        }
    };

    return (
        <div>
            <h3>Make Payment</h3>
            <input
                type="text"
                placeholder="Customer Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Payment Amount"
                value={paymentAmount}
                onChange={(e) => setPaymentAmount(e.target.value)}
            />
            <button onClick={handlePayment}>Make Payment</button>
        </div>
    );
};

export default PaymentForm;
