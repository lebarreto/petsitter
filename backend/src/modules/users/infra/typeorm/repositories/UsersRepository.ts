import { EntityRepository, getRepository, Repository } from 'typeorm';
import { injectable } from 'tsyringe';

import Users from '../entities/Users';
import IUsersRepository from '../../../../../modules/users/repositories/IUsersRepository';
import ICreateUsersDTO from '../../../../../modules/users/dtos/ICreateUsersDTO';

@injectable()
@EntityRepository(Users)
class UsersRepository extends Repository<Users> {
  private ormRepository: Repository<Users>;

  constructor() {
    super();
    this.ormRepository = getRepository(Users);
  }

  public async findById(id: string): Promise<Users | undefined> {
    const user = await this.ormRepository.findOne(id);

    return user;
  }

  public async findByEmail(email: string): Promise<Users | undefined> {
    const user = await this.ormRepository.findOne({
      where: {
        email,
      },
    });

    return user;
  }

  public async createUser({
    name,
    email,
    password,
    admin,
  }: ICreateUsersDTO): Promise<Users> {
    const user = this.ormRepository.create({ name, email, password, admin });

    await this.ormRepository.save(user);

    return user;
  }

  public async saveUser(user: Users): Promise<Users> {
    return this.ormRepository.save(user);
  }
}

export default UsersRepository;

