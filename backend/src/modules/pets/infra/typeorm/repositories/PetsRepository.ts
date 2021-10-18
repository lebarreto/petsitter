import { getRepository, Repository } from 'typeorm';

import Pets from '../entities/Pets';
import IPetsRepository from '@modules/pets/repositories/IPetsRepository';
import ICreatePetDTO from '@modules/pets/dtos/ICreatePetDTO';
import IFindPetByOwnerDTO from '@modules/pets/dtos/IFindPetByOwnerDTO';

class PetsRepository implements IPetsRepository {
  private ormRepository: Repository<Pets>;

  constructor() {
    this.ormRepository = getRepository(Pets);
  }

  public async findById(id: string): Promise<Pets | undefined> {
    const pet = await this.ormRepository.findOne(id);

    return pet;
  }

  public async findByOwnerId(user_id: string): Promise<IFindPetByOwnerDTO[]> {
    const pets = await this.ormRepository.find({
      where: {
        user_id
      }
    });

    return pets;
  }

  public async create({ name, user_id }: ICreatePetDTO): Promise<Pets> {
    const pet = this.ormRepository.create({ name, user_id });

    await this.ormRepository.save(pet);

    return pet;
  }

  public async save(pet: Pets): Promise<Pets> {
    return this.ormRepository.save(pet);
  }
}

export default PetsRepository;
