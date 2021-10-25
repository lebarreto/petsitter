import { inject, injectable } from 'tsyringe';

import Checklists from '../infra/typeorm/entities/Checklists';
import IChecklistsRepository from '../repositories/IChecklistsRepository';

interface IRequest {
  user_id: string;
  pet_id: string;
  id: string;
}

@injectable()
export default class ListChecklistsService {
  private checklistsRepository: IChecklistsRepository;

  constructor(
    @inject('ChecklistsRepository')
    checklistsRepository: IChecklistsRepository
  ) {
    this.checklistsRepository = checklistsRepository;
  }

  public async listById(id: string): Promise<Checklists | undefined> {
    const checklist = await this.checklistsRepository.findById(id)

    return checklist;
  }

  public async listByOwner(user_id: string): Promise<Checklists[]> {
    const checklists = await this.checklistsRepository.findByOwner(user_id);

    return checklists;
  }

  public async listByPet(pet_id: string): Promise<Checklists[]> {
    const checklists = await this.checklistsRepository.findByPet(pet_id);

    return checklists;
  }
}
