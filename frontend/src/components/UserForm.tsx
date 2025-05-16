import { useState } from 'react';
import axios from 'axios';
import { User } from '../types/User';

interface Props {
  onUserCreated: () => void;
}

export default function UserForm({ onUserCreated }: Props) {
  const [form, setForm] = useState<User>({ name: '', email: '', age: 0, PhoneNumber: 0,});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setForm({
      ...form,
      [name]: type === 'number' ? Number(value) : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/users', form);
    setForm({ name: '', email: '', age: 0, PhoneNumber: 0 });
    onUserCreated();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" type="string" value={form.name} onChange={handleChange} placeholder="Nombre" required />
      <input name="email" type="string" value={form.email} onChange={handleChange} placeholder="Email" required />
      <input name="age" type="number" value={form.age} onChange={handleChange} placeholder="Edad" required />
      <input name="PhoneNumber" type="number" value={form.PhoneNumber} onChange={handleChange} placeholder="Teléfono" required />
      <button type="submit">Crear Usuario</button>
    </form>
  );
}