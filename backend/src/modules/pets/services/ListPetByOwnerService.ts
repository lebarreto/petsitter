import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IPetsRepository from '@modules/pets/repositories/IPetsRepository';
import IFindPetByOwnerDTO from '../dtos/IFindPetByOwnerDTO';

interface IRequest {
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

  public async execute({ user_id }: IRequest): Promise<IFindPetByOwnerDTO[]> {
    const pets = await this.petsRepository.findByOwnerId(user_id);

    if (!pets) {
      throw new AppError('This owner does not have any pets.', 400);
    }

    return pets;
  }
}
