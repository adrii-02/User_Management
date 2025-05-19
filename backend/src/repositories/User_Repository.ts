import { UserModel, IUser } from '@models/User';

export class UserRepository {
  async createUser(data: Partial<IUser>): Promise<IUser> {
    const user = new UserModel(data);
    return await user.save();
  }

  async findAll(): Promise<IUser[]> {
    return await UserModel.find();
  }

  async findById(id: string): Promise<IUser | null> {
    return await UserModel.findById(id);
  }

  async updateById(id: string, data: Partial<IUser>): Promise<IUser | null> {
    return await UserModel.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteById(id: string): Promise<IUser | null> {
    return await UserModel.findByIdAndDelete(id);
  }

  async findByEmail(email: string): Promise<IUser | null> {
  return UserModel.findOne({ email });
}

  async findByPhoneNumber(phone: number): Promise<IUser | null> {
    return UserModel.findOne({ PhoneNumber: phone });
  }

}