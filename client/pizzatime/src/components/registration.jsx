import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Firstname: '',
    Lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/register', formData);
      console.log(response.data);
      navigate('/login');
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>Firstname:
          <input type="text" name="Firstname" value={formData.Firstname} onChange={handleChange} required />
        </label>

        <label>Lastname:
          <input type="text" name="Lastname" value={formData.Lastname} onChange={handleChange} required />
        </label>

        <label>Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>

        <label>Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>

        <label>Confirm Password:
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
