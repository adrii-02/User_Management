import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { User } from '../types/User';

interface Props {
  onUserCreated: () => void;
  editingUser: User | null;
  onClearEdit: () => void;
}

export default function UserForm({ onUserCreated, editingUser, onClearEdit }: Props) {
  const [form, setForm] = useState<User>({
    name: '',
    email: '',
    age: 0,
    PhoneNumber: 0,
  });

  useEffect(() => {
    if (editingUser) {
      setForm(editingUser);
    } else {
      setForm({ name: '', email: '', age: 0, PhoneNumber: 0 });
    }
  }, [editingUser]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: name === 'age' || name === 'PhoneNumber' ? Number(value) : value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    try{
    e.preventDefault();
    if (editingUser) {
      await axios.put(`http://localhost:5000/users/${editingUser._id}`, form);
      onClearEdit();
    } else {
      await axios.post('http://localhost:5000/users', form);
      setForm({ name: '', email: '', age: 0, PhoneNumber: 0 });
    }
    onUserCreated();

  } catch(error:any){
      toast.error(error.response?.data?.error || 'Error al guardar el usuario');
  }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>{editingUser ? 'Editar Usuario' : 'Crear Usuario'}</h2>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Nombre" required />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
      <input name="age" type="number" value={form.age} onChange={handleChange} placeholder="Edad" required />
      <input name="PhoneNumber" type="number" value={form.PhoneNumber} onChange={handleChange} placeholder="Teléfono" required />
      <div className="button-row">
        <button type="submit">{editingUser ? 'Guardar Usuario' : 'Crear Usuario'}</button>
        {editingUser && (
          <button type="button" onClick={onClearEdit}>Cancelar</button>
        )}
      </div>
    </form>
  );
}
