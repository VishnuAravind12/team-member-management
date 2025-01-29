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
      <h2>Team Members ({members.length})</h2>
      <Link to="/add" style={{ textDecoration: 'none' }}>+ Add Member</Link>
      <ul>
        {members.map(member => (
          <li key={member.id}>
            <Link to={`/edit/${member.id}`}>
              {member.first_name} {member.last_name} 
              {member.role === 'admin' && ' (Admin)'}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListPage;