import { Request, Response } from 'express';
import * as UserService from '@services/User_Service';

export const createUser = async (req: Request, res: Response) => {
  console.log('📩 Petición recibida para crear usuario:', req.body);
  const user = await UserService.createUser(req.body);
  res.status(201).json(user);
};

export const getUsers = async (_: Request, res: Response) => {
  const users = await UserService.getAllUsers();
  res.status(200).json(users);
};