import { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

export default function App() {
  const [editingUser, setEditingUser] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleUserEdited = (user: any) => {
    setEditingUser(user);
  };

  return (
    <div className="app-container">
      <h1 className="title">Gestión de Usuarios</h1>
      <div className="main-content">
        <div className="form-section">
          <UserForm
            editingUser={editingUser}
            onUserCreated={() => setRefresh(!refresh)}
            onClearEdit={() => setEditingUser(null)}
          />
        </div>
        <div className="list-section">
          <UserList
            onEditUser={handleUserEdited}
            refreshTrigger={refresh}
          />
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
