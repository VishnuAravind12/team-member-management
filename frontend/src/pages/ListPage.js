import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ListPage() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/members/')
      .then(response => response.json())
      .then(data => setMembers(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2 className="mb-4">Team Members <span className="text-muted">({members.length})</span></h2>
      <div className="d-flex justify-content-end mb-3">
        <Link to="/add" className="btn btn-primary">+ Add Member</Link>
      </div>
      <ul className="list-group">
        {members.map(member => (
          <li key={member.id} className="list-group-item">
            <Link to={`/edit/${member.id}`} className="text-decoration-none">
              <strong>{member.first_name} {member.last_name}</strong>
              {member.role === 'admin' && <span className="badge bg-danger ms-2">Admin</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListPage;