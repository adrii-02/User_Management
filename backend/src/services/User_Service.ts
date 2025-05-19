import { UserRepository } from '@repositories/User_Repository';
import { IUser } from '@models/User';

const userRepository = new UserRepository();

export class UserService {
  async createUser(data: IUser): Promise<IUser> {

    //Comprobar si existe mail o número
    const mailExist = await userRepository.findByEmail(data.email);
    const phoneExist = await userRepository.findByPhoneNumber(data.PhoneNumber);
  if (mailExist || phoneExist) throw new Error('Error al crear el usuario');


    return userRepository.createUser(data);
  }

  async getUsers(): Promise<IUser[]> {
    return userRepository.findAll();
  }

  async getUserById(id: string): Promise<IUser | null> {
    return userRepository.findById(id);
  }

  async updateUser(id: string, data: IUser): Promise<IUser | null> {
    return userRepository.updateById(id, data);
  }

  async deleteUser(id: string): Promise<IUser | null> {
    return userRepository.deleteById(id);
  }
}
