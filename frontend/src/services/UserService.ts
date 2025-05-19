import axios from 'axios';
import { User } from '../types/User';

const API_URL = 'http://localhost:5000/users';

export const getUsers = () => axios.get<User[]>(API_URL);
export const createUser = (user: User) => axios.post<User>(API_URL, user);
export const updateUser = (id: string, user: User) => axios.put<User>(`${API_URL}/${id}`, user);
export const deleteUser = (id: string) => axios.delete(`${API_URL}/${id}`);
