import * as UserRepository from '@repositories/User_Repository';
import { IUser } from '@models/User';

export const createUser = async (data: Partial<IUser>) => {
  // Aquí podrías validar si el email existe antes
  return await UserRepository.createUser(data);
};

export const getAllUsers = async () => {
  return await UserRepository.findAllUsers();
};
