import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ListPage() {
  const [members, setMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/members/')
      .then(response => response.json())
      .then(data => setMembers(data))
      .catch(err => console.error(err));
  }, []);

  // Filter by search
  const filteredMembers = members.filter(member => {
    const fullName = `${member.first_name} ${member.last_name}`.toLowerCase();
    return fullName.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Team Members ({filteredMembers.length})</h2>
        <Link to="/add" className="btn btn-primary">+ Add Member</Link>
      </div>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <ul className="list-group">
        {filteredMembers.map((member) => (
          <li key={member.id} className="list-group-item">
            <Link to={`/edit/${member.id}`} className="text-decoration-none">
              <strong>{member.first_name} {member.last_name}</strong>
              {member.role === 'admin' && ' (Admin)'}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListPage;