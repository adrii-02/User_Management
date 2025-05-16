import User, { IUser } from '@models/User';

// Listar todos los usuarios de la base de datos
export const findAllUsers = async (): Promise<IUser[]> => {
    return await User.find();
};

// Creación de usuario en base de datos
export const createUser = async (data: Partial<IUser>): Promise<IUser> => {
  const user = new User(data);
  return await user.save();
};