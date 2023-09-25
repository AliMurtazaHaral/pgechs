import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './AddLedger.css'
const AddLedger = () => {
  const [formData, setFormData] = useState({
    ledgerID: '',
    date: new Date(),
    particulars: '',
    checkDraft: '',
    credit: '',
    debit: '',
    balance: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      date,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., sending data to a server.
    console.log('Submitted:', formData);
  };

  return (
    <div className="ledger-form">
      <h2>Ledger Entry Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="ledgerID">Ledger ID</label>
          <input
            type="text"
            id="ledgerID"
            name="ledgerID"
            value={formData.ledgerID}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <DatePicker
            selected={formData.date}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="form-group">
          <label htmlFor="particulars">Particulars</label>
          <input
            type="text"
            id="particulars"
            name="particulars"
            value={formData.particulars}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="checkDraft">Check/Draft</label>
          <input
            type="text"
            id="checkDraft"
            name="checkDraft"
            value={formData.checkDraft}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="credit">Credit</label>
          <input
            type="text"
            id="credit"
            name="credit"
            value={formData.credit}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="debit">Debit</label>
          <input
            type="text"
            id="debit"
            name="debit"
            value={formData.debit}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="balance">Balance</label>
          <input
            type="text"
            id="balance"
            name="balance"
            value={formData.balance}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddLedger;
