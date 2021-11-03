import Checklists from "../infra/typeorm/entities/Checklist";
import ICreateChecklistsDTO from "../dtos/ICreateChecklistsDTO";

export default interface IChecklistsRepository {
  findById(id: string): Promise<Checklists | undefined>;
  findByOwner(user_id: string): Promise<Checklists[]>;
  findByPet(pet_id: string): Promise<Checklists[]>;
  create(data: ICreateChecklistsDTO): Promise<Checklists>;
  save(checklist: Checklists): Promise<Checklists>;
}
