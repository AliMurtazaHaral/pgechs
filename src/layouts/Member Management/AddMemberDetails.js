import React, { useState } from 'react';
import axios from 'axios';
import './AddMemberDetails.css'
import {useLocation} from 'react-router-dom';
const AddMemberDetails = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phoneNumber: '',
    cnic: '',
    member_id: location.state.id,
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://pgechs-mj6v.vercel.app/members/addDetails', formData);

      if (response.status === 201) {
        alert("Member has been saved succesfully");
        console.log('User created successfully');
      } else {
        alert("Member has not been saved succesfully");
        console.error('Error creating user');
      }
    } catch (error) {
      alert(error.message);
      console.error('Error:', error);
    }
  };

  return (
    <div className="registration-form">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cnic">CNIC</label>
          <input
            type="text"
            id="cnic"
            name="cnic"
            value={formData.cnic}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="plotID">Plot ID</label>
          <input
            type="text"
            id="plotID"
            name="plotID"
            
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="plotType">Plot Type</label>
          <select
            id="plotType"
            name="plotType"
            
            required
          >
            <option value="Select Plot Type" disabled>
              Select Plot Type
            </option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="dimensions">Dimensions</label>
          <select
            id="dimensions"
            name="dimensions"
            
            required
          >
            <option value="Select Dimensions" disabled>
              Select Dimensions
            </option>
            <option value="5 Marla">5 Marla</option>
            <option value="7 Marla">7 Marla</option>
            <option value="10 Marla">10 Marla</option>
            <option value="1 Kanal">1 Kanal</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="squareFoot">Square Foot</label>
          <input
            type="text"
            id="squareFoot"
            name="squareFoot"
            
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddMemberDetails;
