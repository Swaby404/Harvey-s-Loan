import { useState } from 'react';

function LoanAgreementForm() {
  const [formData, setFormData] = useState({
    effectiveDate: '',
    borrower: '',
    loanAmount: '',
    payments: '',
    paymentAmount: '',
    startDate: '',
    lateDays: '',
    lateFee: '',
    governingLaw: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Loan Agreement saved successfully!');
  };

  return (
    <div>
      <h2>Loan Agreement</h2>

      <form onSubmit={handleSubmit} className="form">
        <label>
          Effective Date:
          <input type="date" name="effectiveDate" onChange={handleChange} />
        </label>

        <label>
          Borrower Name:
          <input type="text" name="borrower" onChange={handleChange} />
        </label>

        <label>
          Loan Amount ($):
          <input type="number" name="loanAmount" onChange={handleChange} />
        </label>

        <label>
          Number of Payments:
          <input type="number" name="payments" onChange={handleChange} />
        </label>

        <label>
          Payment Amount ($):
          <input type="number" name="paymentAmount" onChange={handleChange} />
        </label>

        <label>
          First Payment Date:
          <input type="date" name="startDate" onChange={handleChange} />
        </label>

        <label>
          Late Fee Applies After (days):
          <input type="number" name="lateDays" onChange={handleChange} />
        </label>

        <label>
          Late Fee Amount ($):
          <input type="number" name="lateFee" onChange={handleChange} />
        </label>

        <label>
          Governing Law:
          <input type="text" name="governingLaw" onChange={handleChange} />
        </label>

        <button type="submit">Save Agreement</button>
      </form>

      <hr />

      <h3>Lender Information</h3>
      <p>
        <strong>HARVEY SWABY</strong><br />
        P.O. Box 309, KY1-1501<br />
        Grand Cayman, Cayman Islands<br />
        Cell: 1-(345) 917-8564<br />
        Email: ky.harvey.s@gmail.com
      </p>
    </div>
  );
}

export default LoanAgreementForm;
