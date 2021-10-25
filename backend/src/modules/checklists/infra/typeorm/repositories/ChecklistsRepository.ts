import { getRepository, Repository } from 'typeorm';

import Checklists from '../entities/Checklists';
import IChecklistsRepository from '../../../../../modules/checklists/repositories/IChecklistsRepository';
import ICreateChecklistsDTO from '../../../../../modules/checklists/dtos/ICreateChecklistsDTO';

class ChecklistsRepository implements IChecklistsRepository {
  private ormRepository: Repository<Checklists>;

  constructor() {
    this.ormRepository = getRepository(Checklists);
  }

  public async findById(id: string): Promise<Checklists | undefined> {
    const checklist = await this.ormRepository.findOne(id);

    return checklist;
  }

  public async findByOwner(user_id: string): Promise<Checklists[]> {
    const checklists = await this.ormRepository.find({
      where: {
        user_id
      }
    });

    return checklists;
  }

  public async findByPet(pet_id: string): Promise<Checklists[]> {
    const checklists = await this.ormRepository.find({
      where: {
        pet_id
      }
    });

    return checklists;
  }

  public async create({ pet_id, user_id, questions }: ICreateChecklistsDTO): Promise<Checklists> {
    const checklist = this.ormRepository.create({ pet_id, user_id, questions });

    await this.ormRepository.save(checklist);

    return checklist;
  }

  public async save(checklist: Checklists): Promise<Checklists> {
    return this.ormRepository.save(checklist);
  }
}

export default ChecklistsRepository;
