import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreatePetService from '@modules/pets/services/CreatePetService';
import ListPetByOwnerService from '@modules/pets/services/ListPetByOwnerService';
import AppError from '@shared/errors/AppError';

export default class PetsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, user_id } = request.body;

    const createPet = container.resolve(CreatePetService);
    const pet = await createPet.execute({
      name,
      user_id
    });

    return response.json(classToClass(pet));
  }

  public async listByOwner(request: Request, response: Response): Promise<Response> {
    const findPets = container.resolve(ListPetByOwnerService);
    const pets = await findPets.execute({user_id: request.user.id});


    return response.json(classToClass(pets))
  }
}
