import React, { useState } from 'react';
import './AddDEO.css'
import Footer from 'examples/Footer';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import Header from 'layouts/profile/components/Header';
const bgImage =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/profile-layout-header.jpg";

import axios from 'axios';

const AddDEO = () => {
  const [uname, setUsername] = useState("")
  const [pass, setPassword] = useState("")
  const [role, setRole] = useState("65108da454d406ae7e8c5148")
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
      const response = await axios.post('https://pgechs-mj6v.vercel.app/admin/Register', {
        "username": uname,
        "password": pass,
        "role": "65108da454d406ae7e8c5148"
      });

      if (response.status === 201) {
        alert("Data saved succesfully");
        console.log('User created successfully');
      } else {
        alert("Data not saved succesfully");
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
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={uname}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={pass}
                onChange={(e) => setPassword(e.target.value)}
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

export default AddDEO;
