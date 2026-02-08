import './App.css';
import { useState } from 'react';
import LoanForm from './components/LoanForm';
import PaymentForm from './components/PaymentForm';
import BalanceCheck from './components/BalanceCheck';
import logo from './assets/HarveysLoan.png';  // Import logo from src/assets folder

function App() {
    // Simulate in-memory customer data storage
    const [customers, setCustomers] = useState({});
    

    const applyLoan = (customerName, amount, interest) => {
        const totalLoan = amount + (amount * interest / 100);

        setCustomers((prevState) => {
            const customer = prevState[customerName] || { balance: 0 };
            const newBalance = customer.balance + totalLoan;

            return {
                ...prevState,
                [customerName]: { balance: newBalance }
            };
        });

        alert(`Loan application successful for ${customerName}. Total loan: $${totalLoan}`);
    };

    const makePayment = (customerName, paymentAmount) => {
        setCustomers((prevState) => {
            const customer = prevState[customerName];
            if (!customer) {
                alert('Customer not found!');
                return prevState;
            }

            const newBalance = Math.max(0, customer.balance - paymentAmount);
            return {
                ...prevState,
                [customerName]: { balance: newBalance }
            };
        });

        alert('Payment successful!');
    };

    const checkBalance = (customerName) => {
        const customer = customers[customerName];
        return customer ? customer.balance : 0;
    };

    const existingCustomer = (customerName) => customers[customerName] !== undefined;

    return (
        <div style={{ padding: '20px' }}>
            <div className="App">
            <header className="App-header">
                <img src={logo} alt="Harvey's Loan Logo" style={{ width: '200px', height: 'auto' }} />
 
            </header>
        </div>

            {/* Loan Application Form */}
            <LoanForm
                applyLoan={applyLoan}
                existingCustomer={existingCustomer}
            />

            {/* Payment Form */}
            <PaymentForm makePayment={makePayment} />

            {/* Balance Check */}
            <BalanceCheck checkBalance={checkBalance} />
        </div>
    );
}

export default App;
