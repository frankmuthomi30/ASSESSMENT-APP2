import React, { useState } from 'react';
import { ReactDOM } from 'react-dom';

function Users() {
  const [users] = useState([
    { name: "John Doe", id: 1, career: 'Software engineer' }, 
    { name: "Jane Doe", id: 2, career: 'data scientist' }, 
    { name: "Billy Doe", id: 3, career: 'cyber security analyst' }
  ]);

  return (
    <ul>
      {users.map(function(user) {
        return (
          <li key={user.id}>
            <p>Name: {user.name}</p>
            <p>ID: {user.id}</p>
            <p>Career: {user.career}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default Users;
