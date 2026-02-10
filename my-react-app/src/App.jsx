import './App.css';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import LoanAgreementForm from './components/LoanAgreementForm';

import LoanForm from './components/LoanForm';
import PaymentForm from './components/PaymentForm';
import BalanceCheck from './components/BalanceCheck';

import logo from './assets/HarveysLoan.png';

function App() {
  const [customers, setCustomers] = useState({});

  const applyLoan = (customerName, amount, interest) => {
    const totalLoan = amount + (amount * interest / 100);

    setCustomers(prev => {
      const customer = prev[customerName] || { balance: 0 };
      return {
        ...prev,
        [customerName]: { balance: customer.balance + totalLoan }
      };
    });

    alert(`Loan application successful for ${customerName}. Total loan: $${totalLoan}`);
  };

  const makePayment = (customerName, paymentAmount) => {
    setCustomers(prev => {
      const customer = prev[customerName];
      if (!customer) {
        alert('Customer not found!');
        return prev;
      }

      return {
        ...prev,
        [customerName]: {
          balance: Math.max(0, customer.balance - paymentAmount)
        }
      };
    });

    alert('Payment successful!');
  };

  const checkBalance = (customerName) =>
    customers[customerName] ? customers[customerName].balance : 0;

  const existingCustomer = (customerName) =>
    customers[customerName] !== undefined;

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          alt="Harvey's Loan Logo"
          style={{ width: '200px' }}
        />

        {/* Navigation */}
        <nav style={{ marginTop: '20px' }}>
  <Link to="/" style={{ marginRight: '15px' }}>Apply Loan</Link>
  <Link to="/payment" style={{ marginRight: '15px' }}>Make Payment</Link>
  <Link to="/balance" style={{ marginRight: '15px' }}>Check Balance</Link>
  <Link to="/agreement">Loan Agreement</Link>
</nav>

      </header>

      <div style={{ padding: '20px' }}>
        <Routes>
          <Route
            path="/"
            element={
              <LoanForm
                applyLoan={applyLoan}
                existingCustomer={existingCustomer}
              />
            }
          />

          <Route
            path="/payment"
            element={<PaymentForm makePayment={makePayment} />}
          />

          <Route
            path="/balance"
            element={<BalanceCheck checkBalance={checkBalance} />}
          />
          <Route
  path="/agreement"
  element={<LoanAgreementForm />}
/>


            
        </Routes>
        
      </div>
    </div>
  );
}

export default App;
