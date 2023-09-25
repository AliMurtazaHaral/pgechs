import React, { useState } from 'react';
import './AddDEO.css'
import Footer from 'examples/Footer';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import Header from 'layouts/profile/components/Header';
import axios from 'axios';
const bgImage =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/profile-layout-header.jpg";

const AddMember = () => {
  const [formData, setFormData] = useState({
    email: '',
    memberId: '',
    password: '',
    role:"65108dbc54d406ae7e8c514c"
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
      const response = await axios.post('https://pgechs-mj6v.vercel.app/members/membersRegister', formData);

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
    <>
    <DashboardLayout
      sx={{
        backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.info.main, 0.6),
            rgba(gradients.info.state, 0.6)
          )}, url(${bgImage})`,
        backgroundPositionY: "50%",
      }}
    >
      <Header />
      <div className="login-form">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Member ID</label>
          <input
            type="text"
            id="memberId"
            name="memberId"
            value={formData.memberId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>

      <Footer />
    </DashboardLayout>
    </>
    
  );
};

export default AddMember;
