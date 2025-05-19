import { useState } from 'react';
import { User } from '../types/User';
import { updateUser } from '../services/UserService';

interface Props {
  user: User;
  onClose: () => void;
  onUserUpdated: () => void;
}

export default function UserEditModal({ user, onClose, onUserUpdated }: Props) {
  const [form, setForm] = useState<User>({ ...user });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.name === 'age' || e.target.name === 'PhoneNumber'
        ? Number(e.target.value)
        : e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form._id) {
      await updateUser(form._id, form);
      onUserUpdated();
      onClose();
    }
  };

  return (
  <div className="edit-modal">
    <h3>Editar Usuario</h3>
    <form onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} required />
      <input name="email" value={form.email} onChange={handleChange} required />
      <input name="age" type="number" value={form.age} onChange={handleChange} required />
      <input name="PhoneNumber" type="number" value={form.PhoneNumber} onChange={handleChange} required />
      <div className="button-row">
        <button type="submit">Guardar</button>
        <button type="button" onClick={onClose}>Cancelar</button>
      </div>
    </form>
  </div>
);

}