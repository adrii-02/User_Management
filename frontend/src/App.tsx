import UserForm from './components/UserForm';
import UserList from './components/UserList';
import './App.css';

function App() {
  const refresh = () => window.location.reload();

  return (
    <div>
      <h1>Gestión de Usuarios</h1>
      <UserForm onUserCreated={refresh} />
      <UserList />
    </div>
  );
}

export default App;
