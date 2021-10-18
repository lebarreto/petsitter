import { inject, injectable } from 'tsyringe';

import Users from '../infra/typeorm/entities/Users';
import AppError from '@shared/errors/AppError';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import IHashProvider from '@modules/users/providers/HashProvider/models/IHashProvider';

interface IRequest {
  name: string;
  email: string;
  password: string;
  admin: boolean;
}

@injectable()
export default class CreateUserService {
  private userRepository: IUsersRepository;
  private hashProvider: IHashProvider;

  constructor(
    @inject('UsersRepository')
    userRepository: IUsersRepository,

    @inject('HashProvider')
    hashProvider: IHashProvider
  ) {
    this.userRepository = userRepository;
    this.hashProvider = hashProvider;
  }

  public async execute({ name, email, password, admin }: IRequest): Promise<Users> {
    const checkIfUserExists = await this.userRepository.findByEmail(email);

    if (checkIfUserExists) {
      throw new AppError('Email address has already been used.', 400);
    }

    const hashedPassword = await this.hashProvider.generateHash(password);

    const user = await this.userRepository.create({
      name,
      admin,
      email,
      password: hashedPassword
    });

    return user;
  }
}
