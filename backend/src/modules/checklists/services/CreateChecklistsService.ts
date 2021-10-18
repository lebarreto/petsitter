import { inject, injectable } from 'tsyringe';

import Checklists from '../infra/typeorm/entities/Checklists';
import IChecklistsRepository from '../repositories/IChecklistsRepository';

interface IRequest {
  pet_id: string;
  user_id: string;
  questions: string[];
}

@injectable()
export default class CreatePetService {
  private checklistsRepository: IChecklistsRepository;

  constructor(
    @inject('ChecklistsRepository')
    checklistsRepository: IChecklistsRepository
  ) {
    this.checklistsRepository = checklistsRepository;
  }

  public async execute({ pet_id, user_id, questions }: IRequest): Promise<Checklists> {
    const checklist = await this.checklistsRepository.create({
      pet_id,
      user_id,
      questions
    });

    return checklist;
  }
}
