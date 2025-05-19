import { useEffect, useState } from 'react';
import axios from 'axios';
import { User } from '../types/User';

interface Props {
  onEditUser: (user: User) => void;
  refreshTrigger: boolean;
}

export default function UserList({ onEditUser, refreshTrigger }: Props) {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get('http://localhost:5000/users');
      setUsers(res.data);
    };
    fetchUsers();
  }, [refreshTrigger]);

  const handleDelete = async (user: User) => {
    if (!user._id) return;
    await axios.delete(`http://localhost:5000/users/${user._id}`);
    setUsers(prev => prev.filter(u => u._id !== user._id));
  };

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <ul className="user-list">
        {users.map(user => (
          <li key={user._id} className="user-list-item">
            <div>
              <strong>{user.name}</strong> ({user.age})<br />
              {user.email} - {user.PhoneNumber}
            </div>
            <div className="button-row">
              <button onClick={() => onEditUser(user)}>Editar</button>
              <button onClick={() => handleDelete(user)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
