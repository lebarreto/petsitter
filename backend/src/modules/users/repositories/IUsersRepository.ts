import Users from '../infra/typeorm/entities/Users';
import ICreateUsersDTO from '../dtos/ICreateUsersDTO';

export default interface IUsersRepository {
  findById(id: string): Promise<Users | undefined>;
  findByEmail(email: string): Promise<Users | undefined>;
  createUser(data: ICreateUsersDTO): Promise<Users>;
  saveUser(user: Users): Promise<Users>;
}
