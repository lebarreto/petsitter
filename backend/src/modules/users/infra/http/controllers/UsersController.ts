import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreateUserService from '../../../../../modules/users/services/CreateUserService';
export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password, admin } = request.body;

    const createUser = container.resolve(CreateUserService);
    const user = await createUser.execute({
      name,
      email,
      password,
      admin
    });

    return response.json(classToClass(user));
  }

  public async test(request: Request, response: Response): Promise<Response> {
    return response.json('testeeee');
  }
}
