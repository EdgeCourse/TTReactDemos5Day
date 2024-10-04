// src/components/Users.js
import React from 'react';

function Users({ data }) {
  return (
    <div>
      <h2 className="text-lg font-medium mb-2">Users</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;