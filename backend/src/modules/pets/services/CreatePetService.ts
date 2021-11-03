import { inject, injectable } from 'tsyringe';

import Pets from '../infra/typeorm/entities/Pet';
import IPetsRepository from '../../../modules/pets/repositories/IPetsRepository';

interface IRequest {
  name: string;
  user_id: string;
}

@injectable()
export default class CreatePetService {
  private petsRepository: IPetsRepository;

  constructor(
    @inject('PetsRepository')
    petsRepository: IPetsRepository
  ) {
    this.petsRepository = petsRepository;
  }

  public async execute({ name, user_id }: IRequest): Promise<Pets> {
    const pet = await this.petsRepository.create({
      name,
      user_id
    });

    return pet;
  }
}
