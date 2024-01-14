import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import axios from 'axios';

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Firstname: '',
    Lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    city: '',
    state: '',
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
    <div className="container mt-5">
      <div className="row justify-content-between align-items-center mb-4">
        <div className="col">
          <h2>Registration</h2>
        </div>
        <div className="col text-right">
          <NavLink to="/login" className="btn btn-link">
            Already have an account? Login
          </NavLink>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Firstname:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="Firstname"
                    value={formData.Firstname}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Lastname:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="Lastname"
                    value={formData.Lastname}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Confirm Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Address:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>City:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>State:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
