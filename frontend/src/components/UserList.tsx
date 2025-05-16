import { useEffect, useState } from 'react';
import axios from 'axios';
import { User } from '../types/User';

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);

  const loadUsers = async () => {
    const res = await axios.get('http://localhost:5000/users');
    setUsers(res.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div>
      <h2>Lista de usuarios</h2>
      <ul>
        {users.map(user => (
          <li key={user._id}>{user.name} - {user.email} - {user.age} - {user.PhoneNumber}</li>
        ))}
      </ul>
    </div>
  );
}
