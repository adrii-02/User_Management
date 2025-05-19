import { Request, Response, NextFunction } from 'express';
import { UserService } from '@services/User_Service';

const userService = new UserService();

export class UserController {
  static async createUser(req: Request, res: Response) {
    try {
      const user = await userService.createUser(req.body);
      res.status(201).json(user);
    } catch (err) {
    

    res.status(500).json({ error: 'Error al crear usuario, el correo o el número de teléfono ya existe.' });
  }
  }

  static async getUsers(req: Request, res: Response) {
    try {
      const users = await userService.getUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener usuarios' });
    }
  }

  static async getUserById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const user = await userService.getUserById(req.params.id);
      if (!user) {
        res.status(404).json({ error: 'Usuario no encontrado' });
        return;
      }
      res.json(user);
    } catch (error) {
      next(error);
    }
  }

  static async updateUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const user = await userService.updateUser(req.params.id, req.body);
      if (!user){
        res.status(404).json({ error: 'Usuario no encontrado' });
        return;
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar usuario' });
    }
  }

  static async deleteUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const user = await userService.deleteUser(req.params.id);
      if (!user){
        res.status(404).json({ error: 'Usuario no encontrado' });
        return;
      } 
      res.json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar usuario' });
    }
  }
}
