import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone_number: '',
    email: '',
    role: 'regular',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://127.0.0.1:8000/api/members/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then((response) => response.json())
    .then(() => navigate('/'))
    .catch((err) => console.error(err));
  };

  return (
    <div>
      <h2 className="mb-4">Add New Team Member</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="first_name" className="form-label">First Name</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            className="form-control"
            value={formData.first_name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="last_name" className="form-label">Last Name</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            className="form-control"
            value={formData.last_name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phone_number" className="form-label">Phone</label>
          <input
            type="text"
            id="phone_number"
            name="phone_number"
            className="form-control"
            value={formData.phone_number}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="role" className="form-label">Role</label>
          <select
            id="role"
            name="role"
            className="form-select"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="regular">Regular</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button type="submit" className="btn btn-success">Save</button>
      </form>
    </div>
  );
}

export default AddPage;
